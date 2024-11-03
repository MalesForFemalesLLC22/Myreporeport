name: Auto Assign
on:
  issues:
    types: [opened]
  pull_request:
    types: [opened]
jobs:
  run:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      pull-requests: write
    steps:
    - name: 'Auto-assign issue'
      uses: pozil/auto-assign-issue@v1
      with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
          assignees: Madib036
          numOfAssignee: 1
