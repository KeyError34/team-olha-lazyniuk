Guide to Creating a Pull Request (PR)

1. Pull Request in a Forked Project

1.1. Forking the Repository

1. Go to the project repository on GitHub.


2. Click the Fork button (in the top right corner).


3. Open your fork (it will appear in your GitHub account).



1.2. Cloning the Fork

git clone https://github.com/YOUR_GITHUB/REPOSITORY.git
cd REPOSITORY

1.3. Connecting the Original Repository

git remote add upstream https://github.com/ORIGINAL_OWNER/REPOSITORY.git
git remote -v  # Verify the connection

1.4. Creating a Branch for Development

git checkout -b feature/feature-name

1.5. Making Changes, Committing, and Pushing

git add .
git commit -m "Adds feature X"
git push origin feature/feature-name

1.6. Creating a Pull Request

1. Go to GitHub and open your fork.


2. Click Compare & pull request.


3. Review your changes and select upstream/main as the target branch.


4. Write a PR description and submit it for review.




---

2. Pull Request in a Project Without a Fork

2.1. Cloning the Repository

git clone https://github.com/ORIGINAL_OWNER/REPOSITORY.git
cd REPOSITORY

2.2. Updating main

git checkout main
git pull origin main

2.3. Creating a New Branch

git checkout -b feature/feature-name

2.4. Making Changes, Committing, and Pushing

git add .
git commit -m "Adds feature X"
git push origin feature/feature-name

2.5. Creating a Pull Request

1. Go to the repository on GitHub.


2. Find your branch and click New pull request.


3. Ensure the changes are targeted at main.


4. Add a description and submit it for review.




---

3. Updating a Fork Before a New PR

3.1. Switching to main

git checkout main

3.2. Fetching Updates from the Original Repository

git fetch upstream
git merge upstream/main

3.3. Pushing Updates to the Fork

git push origin main

Now you can create a new branch and submit your next PR! 🚀


---

4. Updating a Local Branch from a Remote Repository

4.1. In a Forked Project (Updating from Upstream)

git checkout main
git fetch upstream
git merge upstream/main
git push origin main

4.2. In a Project Without a Fork (Updating from Origin)

git checkout main
git fetch origin
git merge origin/main

Now your local branch contains the latest changes from the remote repository!