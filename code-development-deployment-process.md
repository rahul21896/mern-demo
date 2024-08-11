

## Branch Structure Overview
- **`main`**: The production branch. Always contains stable and deployable code.
- **`stage`**: Pre-production branch for final testing before merging into `main`.
- **`qa`**: Quality assurance branch used for testing new features and bug fixes.
- **`dev`**: Development branch where feature branches are merged after initial development.

## GitHub Pre-Commit Checks

### 1. Pre-Commit Hooks Setup
- **Linting**: Ensure all PHP files adhere to coding standards using a linter like PHP_CodeSniffer.
- **Code Formatting**: Automatically format code using tools like PHP-CS-Fixer.
- **Unit Tests**: Run unit tests to catch errors before code is committed.
- **Commit Message Validation**: Enforce a standardized format for commit messages (e.g., including Jira ticket IDs).

### 2. Task Workflow with Pre-Commit Checks

#### 1. Feature Development
- **Branch Creation**: Create a new feature branch from `dev` for each task or feature (`feature/feature-name`).
- **Development**: Develop the feature locally, ensuring adherence to coding standards.
- **Pre-Commit Checks**:
  - **Automatic Linting**: On each commit, the linter runs to ensure code follows WordPress/PHP standards.
  - **Code Formatting**: Automatically format code before committing to maintain consistency.
  - **Run Tests**: Automatically run unit tests to catch any potential issues early.
  - **Commit Message Hook**: Validate the commit message format to ensure it follows the project's standards (e.g., `JIRA-123: Implemented user login feature`).
- **Commit and Push**: After successful pre-commit checks, commit and push changes to the feature branch.

#### 2. Code Review on `dev` Branch
- **Pull Request (PR) Creation**: Create a PR from the feature branch to `dev` after development.
  - **PR Naming**: Include the Jira ticket ID (if applicable) in the PR title (e.g., `[JIRA-123] Implemented user login feature`).
  - **Link to Jira**: If using Jira, link the PR to the relevant Jira ticket.
- **Automated Checks on PR**:
  - **CI/CD Pipeline**: Trigger CI/CD to run automated tests, code quality checks, and linters on the PR.
  - **Static Analysis**: Run static analysis tools to detect potential issues.
- **Manual Code Review**:
  - Review code for adherence to WordPress/PHP coding standards.
  - Check for logic errors, security vulnerabilities, and performance considerations.
  - Validate the correct use of WordPress functions and hooks.
  - Ensure code documentation is complete and follows best practices.
- **Feedback and Iteration**:
  - Provide feedback directly on the PR if issues are found.
  - Developer addresses feedback and pushes changes to the feature branch, with pre-commit checks rerun.
- **Approval and Merge**: Once approved, merge the feature branch into `dev`.

#### 3. QA Testing on `qa` Branch
- **PR to `qa`**: After merging into `dev`, create a PR from `dev` to `qa` for QA testing.
- **Automated QA Checks**:
  - Run automated end-to-end tests, if available.
  - Verify that pre-commit checks are consistently passing.
- **QA Testing**:
  - QA team pulls the `qa` branch and conducts comprehensive testing:
    - Functional testing.
    - Security and performance testing.
    - Cross-browser and cross-device testing.
  - Log any issues found, and if necessary, assign the ticket back to the developer for fixes.
- **Issue Resolution**:
  - Resolve any issues in the `dev` branch, followed by a new PR to `qa`.
  - Once all issues are resolved, approve the PR and merge into `qa`.

#### 4. Staging on `stage` Branch
- **PR to `stage`**: After successful QA testing, create a PR from `qa` to `stage`.
- **Staging Testing**:
  - The `stage` branch is used for final testing in an environment that mirrors production.
  - Conduct final integration tests and user acceptance testing (UAT).
  - Resolve any issues in the `dev` branch, and follow the process through `qa` and `stage`.
  - Once staging tests pass, approve the PR and merge into `stage`.

#### 5. Production Deployment on `main` Branch
- **PR to `main`**: After successful testing in `stage`, create a PR from `stage` to `main`.
  - **Final Review**: Ensure the PR is reviewed and approved by a senior developer or team lead.
- **Merge and Deploy**: Once approved, merge the PR into `main` and deploy the code to the production environment.
- **Deployment Verification**: Confirm that the deployment was successful, and the live site functions as expected.

## Best Practices
- **PR Templates**: Use a consistent PR template that includes a description, testing instructions, and relevant Jira ticket or issue link
