# Review Cards Backend

## Endpoints

### Businesses (auth)
- POST `/review-cards/businesses`
- GET `/review-cards/businesses`
- GET `/review-cards/businesses/:id`
- PATCH `/review-cards/businesses/:id`

### Templates (public)
- GET `/review-cards/templates?aspect=&category=`

### Projects (auth)
- POST `/review-cards/projects`
- GET `/review-cards/projects`
- GET `/review-cards/projects/:id`
- PATCH `/review-cards/projects/:id`
- POST `/review-cards/projects/:id/publish`

### Exports (auth)
- POST `/review-cards/projects/:id/exports`
- GET `/review-cards/exports/:id`

### Premium Requests (auth)
- POST `/review-cards/premium-requests`
- GET `/review-cards/premium-requests`
- PATCH `/review-cards/premium-requests/:id` (admin only)

### Redirect (public)
- GET `/r/:slug`

## Env Vars
- `REVIEW_CARDS_IP_HASH_SALT` (required for hashing IPs)
- `BASE_PUBLIC_URL` (optional; used only by client code)
