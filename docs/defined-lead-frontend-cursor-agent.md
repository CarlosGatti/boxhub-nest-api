# Cursor agent brief — Defined lead capture (frontend wiring only)

Use this document as **instructions for a Cursor agent** working on the **Defined marketing / funnel frontend**. The backend already implements persistence, email, and validation in `boxhub-nest-api` (`DefinedLeadsModule`).

---

## Non‑negotiables

1. **Do not change layout, spacing, typography, colors, or component structure** except what is strictly required to attach `name` / `value` / controlled state to **existing** inputs.
2. **Do not redesign** the funnel page or form — only **wire** submission, validation messages, and optional hidden fields.
3. If the form already collects name, email, phone, etc., **map those fields** to the API input keys below. **Add inputs only** when a required API field has no UI equivalent (e.g. **consent checkbox** if missing).
4. Prefer **minimal diffs** in the files that own the form (handlers, GraphQL client call, env usage).

---

## API contract (GraphQL)

- **Endpoint:** configurable via frontend env, e.g. `NEXT_PUBLIC_GRAPHQL_URL` or `VITE_GRAPHQL_URL` → must point to the deployed `boxhub-nest-api` **`/graphql`** URL (same origin or CORS‑allowed origin per backend config).
- **Auth:** none — mutation is **public** (no `Authorization` header required).
- **Method:** `POST` with JSON body `{ "query": "...", "variables": { ... } }` (standard GraphQL over HTTP).

### Mutation name

`submitDefinedLead`

### GraphQL document (example)

```graphql
mutation SubmitDefinedLead($input: SubmitDefinedLeadInput!) {
  submitDefinedLead(input: $input) {
    success
    message
    leadId
    submissionAccepted
  }
}
```

### Response shape (`SubmitDefinedLeadPayload`)

| Field                 | Type           | Meaning |
|----------------------|----------------|---------|
| `success`            | Boolean        | Request handled successfully from UX perspective |
| `message`            | String         | Short user-facing copy (safe, no stack traces) |
| `leadId`             | Int (nullable) | DB id when a lead row was saved; **`null` on honeypot discard** |
| `submissionAccepted` | Boolean      | `true` when stored (or honeypot benign path) |

**UX rule:** treat **HTTP 200 + `success === true`** as “we got it” for the user. If `leadId` is null but `submissionAccepted` is true, still show a neutral thank-you (honeypot path — do not expose this distinction to end users).

### Errors

- **Validation:** GraphQL errors with 400-class messages (invalid email, consent not true, phone format, etc.).
- **Rate limit:** HTTP **429** — show a polite “too many attempts, try again shortly” (no retries loop).
- **Server errors:** generic message; **do not** display raw GraphQL exception payloads in production UI.

---

## Input type: `SubmitDefinedLeadInput`

### Required (must be sent)

| Field       | Notes |
|------------|--------|
| `fullName` | Non-empty string, max 120 |
| `email`    | Valid email, max 254 |
| `consent`  | Must be **`true`** (legal/marketing consent). UI: checkbox that must be checked to submit |

### Strongly recommended (hidden or readonly — no layout change)

| Field          | How to populate |
|----------------|-----------------|
| `landingSlug`  | From route segment, CMS slug prop, or constant for this funnel page (identifies which LP sent the lead) |
| `referrer`     | `document.referrer` or empty (max 2000) |
| `utmSource` … `utmTerm` | From `URLSearchParams` on load: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` → camelCase keys in input |
| `gclid` / `fbclid` | From query string if present |

### Optional (only if the page already has a matching field — do not add visible fields solely for analytics)

| Field             | Max length | Notes |
|-------------------|------------|--------|
| `phone`           | 40         | If collected: digits/spaces/`+()-`/`ext` pattern (backend regex) |
| `companyName`     | 200        | |
| `businessType`    | 120        | |
| `city`            | 100        | |
| `state`           | 50         | |
| `selectedPackage` | 120        | e.g. selected plan / tier |
| `serviceInterest` | 200        | |
| `message`         | 5000       | |

### Anti‑spam (required for integration completeness)

| Field       | Rule |
|------------|------|
| `honeypot` | Optional string, max 200. **Must be omitted or empty string.** Implement as a **hidden** input not focusable via CSS (`tabIndex={-1}`, `autoComplete="off"`, `aria-hidden`), **off-screen or visually hidden** — **do not** change visible layout. Bots that fill it cause a benign success without persisting. |

---

## Example variables (minimal happy path)

```json
{
  "input": {
    "fullName": "Jane Doe",
    "email": "jane@example.com",
    "consent": true,
    "landingSlug": "contractors-texas",
    "referrer": "https://google.com",
    "utmSource": "google",
    "utmMedium": "cpc",
    "utmCampaign": "defined-q2",
    "utmContent": null,
    "utmTerm": null,
    "gclid": null,
    "fbclid": null,
    "honeypot": ""
  }
}
```

Add optional fields only when the form already exposes them.

---

## Implementation checklist for the agent

1. [ ] Locate the funnel page form component(s); **preserve** existing markup/classes/styles.
2. [ ] Ensure **controlled** values for `fullName`, `email`, and **`consent: true`** via checkbox before submit.
3. [ ] On submit: build `input` object with required fields + UTM/referrer/slug + optional mapped fields + empty `honeypot`.
4. [ ] Call GraphQL `submitDefinedLead` with the project’s existing HTTP client (fetch/Apollo/urql) — **follow the same pattern** as other GraphQL calls in that repo.
5. [ ] Handle success: toast or inline message using **`message`** from payload when useful; disable double-submit while loading.
6. [ ] Handle errors: show friendly validation text; on 429 show rate-limit copy.
7. [ ] **Do not** add new sections or cards to the page unless strictly needed for **consent** or **honeypot** (honeypot must remain hidden).

---

## Backend reference (do not edit in this task)

Repository: `boxhub-nest-api`  
Module: `src/domains/defined-leads/`  
Resolver: `submitDefinedLead`  
Validation: `SubmitDefinedLeadInput` (class-validator)

---

## Copy-paste prompt for Cursor (frontend repo)

You can paste this block into Cursor as the task description:

```
Implement GraphQL submission for the Defined funnel form using mutation submitDefinedLead and input SubmitDefinedLeadInput. Follow docs/defined-lead-frontend-cursor-agent.md (or the equivalent brief) from boxhub-nest-api: do not change layout or styling; only wire existing fields, add consent checkbox and hidden honeypot if missing, populate UTM/referrer/landingSlug from URL/document/route, use env var for GraphQL endpoint, handle success and errors as specified.
```

(Adjust path if the brief lives elsewhere in the frontend repo.)
