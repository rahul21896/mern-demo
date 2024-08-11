# Code Review Process with GitHub Pre-Commit Checks

## Branch Structure Overview
- **`main`**: Production branch. Always contains stable and deployable code.
- **`stage`**: Pre-production branch for final testing before merging into `main`.
- **`qa`**: Quality assurance branch used for testing new features and bug fixes.
- **`dev`**: Development branch where feature branches are merged after initial development.

## Flowchart of the Code Review Process

```mermaid
graph TD;
    A[Create Jira Ticket] --> B[Create Feature Branch from dev];
    B --> C[Develop Feature];
    C --> D[Run Pre-Commit Checks];
    D --> E{Pre-Commit Checks Passed?};
    E -- No --> F[Fix Issues and Recommit];
    E -- Yes --> G[Create Pull Request to dev];
    G --> H[Automated CI/CD Checks];
    H --> I[Manual Code Review];
    I --> J{Code Review Approved?};
    J -- No --> K[Provide Feedback and Fix Issues];
    J -- Yes --> L1[Conflicts];
    L1 -- No --> L[Merge To Dev];
    L1 -- Yes -- Resolve Conflicts --> L[Merge to dev];
    L --> M[Create Pull Request to qa];
    M --> N[Automated QA Checks];
    N --> O[QA Testing];
    O --> P{QA Passed?};
    P -- No --> Q[Fix Issues in dev];
    P -- Yes --> R[Merge to qa];
    R --> S[Create Pull Request to stage];
    S --> T[Staging Testing];
    T --> U{Staging Passed?};
    U -- No --> V[Fix Issues in dev];
    U -- Yes --> W[Merge to stage];
    W --> X[Create Pull Request to main];
    X --> Y[Final Review];
    Y --> Z{Final Review Approved?};
    Z -- No --> AA[Provide Feedback and Fix Issues];
    Z -- Yes --> AB[Merge to main and Deploy];
