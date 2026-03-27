{{".git/config"}}
The local configuration file for the repository. It stores project-specific settings, such as remote server URLs (like `origin`), branch tracking linkages, and user overrides that take precedence over global settings.

{{".git/FETCH_HEAD"}}
A short-lived, temporary reference file located exactly at `.git/FETCH_HEAD`. It acts as Git's short-term memory during network operations. Every time Git reaches out to a remote server to download data, it records the exact commit hashes and branch names of what it just downloaded inside this file. It exists almost entirely to facilitate the two-step process of a `git pull`.

{{".git/HEAD"}}
A crucial text file that acts as the master pointer for your current working state. In normal operation, it contains a symbolic reference to your active branch (e.g., `ref: refs/heads/main`). In a detached state, it holds a raw commit hash.

{{".git/hooks"}}
A hidden sub-directory inside the Git repository that houses custom executable scripts. Git automatically fires off these scripts before or after specific core events, such as a [commit](<node:git commit>), [push](<node:git push>), [rebase](<node:rebase>), or [merge](<node:git merge>). They are the ultimate automation and enforcement tool in Git. You can write them in any scripting language (Bash, Python, Ruby) to enforce project rules (like running a code linter via a `pre-commit` hook) or automate background tasks. Because they reside inside the `.git` folder, they are strictly local and do not clone over the network by default.

```curated-resources
https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_git_hooks
https://git-scm.com/docs/githooks
```

{{".git/index (Index)"}}
The **physical implementation** of the Staging Area. It is a single **binary file** located at .git/index that maintains a high-speed list of every file in your project, along with their permissions and checksums. When you run git add, you are updating this file; when you run git commit, Git creates the new snapshot exclusively from this list.

{{".git/MERGE_HEAD"}}
A temporary **pseudoref** created automatically when a merge conflict occurs. It stores the hash of the incoming commit being merged, allowing Git to remember the target state while you manually resolve the conflicts in the Working Directory.

{{".git/objects"}}
The core, immutable database directory. It physically stores every Snapshot, metadata file, and raw file content (Commits, Trees, Blobs, and Tags), cryptographically organized by their SHA-1 hashes.

{{".gitignore"}}
A text file where you list patterns for files that Git should **ignore** (like build artifacts, logs, or OS files). These files will not appear in git status.

{{"Atomic Commits"}}
The practice of making commits that do **one thing** only. This makes history easier to read and allows for clean reverts.

{{"Blob Object"}}
A blob (Binary Large OBject) is an **untyped sequence of bytes**, mainly used for content of files.

Blobs can store **Anything that can be represented as a byte stream.**, such as:

* **Symlinks**
* **Git Submodules (Commit Pointers)**
* **Large Binary Assets** Images, compiled binaries, or compressed archives.

---

Key Characteristics of Blobs

* **No Metadata**
* **Content-Addressed** The "name" of a Blob is the SHA-1 (or SHA-256) hash of its content.
* **Immutable:** If you change a single character in a file and commit it, Git creates a brand new Blob with a new hash.

{{"Branch"}}
A lightweight, movable **pointer** to a specific commit. As you make new commits while on a branch, this pointer automatically moves forward to track the latest work.

```curated-resources
https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460
https://stackoverflow.com/a/23961231
https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_new_default_branch
https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell#_git_branches_overview
https://git-scm.com/book/en/v2/Git-Branching-Branch-Management#_branch_management
https://git-scm.com/docs/git-branch
```


{{"Cache"}}
The **original name** for the Staging Area in early versions of Git. It refers to how the Index "caches" the file contents to speed up operations. While the term is largely obsolete in conversation, it survives in low-level command flags like git diff \--cached or git rm \--cached.

{{"Commit Object"}}
Metadata wrapper that permanently binds a specific snapshot of a project's state to a location in the repository's historical timeline.

## Example
```javascript
tree 09a7e5428e35e2b85049089f113480e84b7030db
parent 19eed125b82041446344af229554499e428b2180
author João Paulo <joao.paulo@vouch.io> 1772119130 -0300
committer João Paulo <joao.paulo@vouch.io> 1772119130 -0300
gpgsig -----BEGIN PGP SIGNATURE-----

 iQIzBA...
 -----END PGP SIGNATURE-----

Select node when click Node Link
```

## Resources
```curated-resources
https://learngitbranching.js.org/?level=intro1
https://learngitbranching.js.org/?level=move1
https://youtu.be/ZDR433b0HJY?si=svvsTtOrsrQuUJ2y&t=2648
https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
https://dev.to/__whyd_rf/a-deep-dive-into-git-internals-blobs-trees-and-commits-1doc
```


{{"Commit Object v2"}}
Posso usar esse tipo de Node pra abstrair relações..

{{"DAG (Directed Acyclic Graph)"}}
The **DAG (Directed Acyclic Graph)** represents Git's timeline. Every **Commit Object** is a node pointing backward to its parent(s). It is *directed* (child points to parent) and *acyclic* (no infinite loops). This mathematical model safely enables non-linear workflows, like branching and merging, by ensuring history always resolves to an initial root commit.

```curated-resources
https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects
https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-DAG
```

{{"Dangling Blob"}}
A raw file content object that is unreferenced. This most commonly happens when you use `git add` to stage a file, but then modify that file and `git add` it again *before* committing. The first staged version is replaced in the Index, leaving its Blob dangling in the database.

{{"Dangling Commit"}}
An orphaned commit that has been left behind after a history rewrite (like `git reset --hard` or `git commit --amend`). It contains perfectly valid snapshot data, but because no branch points to it, it is invisible to standard commands like `git log`.

{{"Dangling Object"}}
An overarching term for any physical Git object (Commit, Tree, or Blob) that exists inside the `.git/objects` database but is completely isolated—meaning no active branch, tag, or Reflog entry points to it.

{{"Dangling Tree"}}
An orphaned directory state. This occurs when a tree object is mathematically generated and stored, but never successfully attached to a commit envelope, or when its parent commit is permanently destroyed.

{{"Detached HEAD"}}
A state where **HEAD** points directly to a Commit Hash instead of a Branch name. Commits made in this state are orphan and will be lost if you switch away without creating a branch.

```curated-resources
https://git-scm.com/docs/user-manual#Documentation/user-manual.txt-detachedHEAD
https://git-scm.com/book/en/v2/Git-Internals-Git-References#ref_the_ref
```

{{"Fast-Forward Merge"}}
The simplest and cleanest type of integration. If your active branch has not diverged from the target branch, Git doesn't create a new merge commit; it simply slides your branch pointer forward to exactly match the target.

{{"Feature Branching"}}
A core collaboration strategy where all new development—whether a major feature, a minor tweak, or a bug fix—is strictly isolated in a dedicated, temporary branch. Under this rule, developers never commit directly to the `main` branch. This guarantees that the primary codebase remains stable, clean, and deployable at all times, while giving developers a safe sandbox to experiment, make mistakes, and eventually submit their polished work for peer review.

{{"git add"}}
A command that moves changes from the Working Directory to the Staging Area. It tells Git, "I want this file to be part of the next snapshot."

{{"git bisect"}}
A binary search tool that helps you find the specific commit that introduced a bug by asking you to mark versions as "good" or "bad."

```curated-resources
https://git-scm.com/book/en/v2/Git-Tools-Debugging-with-Git#_binary_search
https://git-scm.com/docs/git-bisect
```

{{"git blame"}}
A command that annotates every line of a file with the commit information (author, date, hash) that last modified it.

{{"git branch"}}
A command used to list, create, or delete branches. It manages the **pointers** to commits but does not switch your working directory to them.

```curated-resources
https://youtu.be/mAFoROnOfHs?si=xla2SiApGOEnnuoV&t=2634
https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely/2003515#comment49055443_2003515
https://stackoverflow.com/a/37320788
https://learngitbranching.js.org/?level=intro1
https://learngitbranching.js.org/?level=rampup3
https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows#_topic_branch
https://git-scm.com/docs/git-branch
```


{{"git branch -d"}}
The "safe delete" command for local branches. It removes a specified branch, but only if its changes have already been successfully merged into your current branch or pushed upstream. If you have unmerged commits, Git actively blocks the deletion to prevent accidental data loss.

{{"git branch -D"}}
The "force delete" command. It permanently destroys a local branch and all of its unique commits, regardless of its merge status. It acts as a strict override to the safe -d flag. This is typically used to completely abandon a failed experimental branch.

{{"git branch -r"}}
An inspection command that lists all **Remote-Tracking Branches** cached in your local repository. It provides a read-only view of what branches currently exist on the remote servers you track.

{{"git branch -vv"}}
A highly detailed, "very verbose" inspection command. It lists all local branches alongside their configured Upstream tracking branches, explicitly showing exactly how many commits your local branch is ahead or behind the server.

{{"git cat-file"}}
A low-level command used to examine the type and content of Git objects directly from the database.

{{"git checkout"}}
A navigation command that updates the `HEAD` pointer to the specified branch, and then overwrites your Index and Working Directory files to exactly match that branch's latest commit.

{{"git checkout [hash]"}}
A command used for "time travel." By targeting a specific commit hash instead of a branch name, it places your repository into a **Detached HEAD** state, allowing you to safely inspect or run old code without altering history.

{{"git checkout / git switch"}}
Commands that update **HEAD** to point to a different branch or commit. switch is the modern, safer version strictly for changing branches, while checkout is the older, multi-purpose tool.

{{"git cherry-pick"}}
A command that duplicates a specific **Commit Object** from another branch, applying its changes to your current branch. Using the commit's **SHA-1 hash** (e.g., `git cherry-pick [hash]`), it grabs isolated features without merging entire timelines. Architecturally, it generates a completely new commit containing the original's exact diff and message.

```curated-resources
https://learngitbranching.js.org/?level=move1
https://learngitbranching.js.org/?level=advanced3
https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick
https://git-scm.com/docs/git-cherry-pick
```

{{"git clone"}}
Creates a local copy of a **Remote Repository**. It downloads the complete database history, automatically configures a network connection named `origin` pointing back to the source, and extracts the latest files into your **Working Directory**. It is the standard way to begin collaborating on an existing project.

```curated-resources
https://learngitbranching.js.org/?level=remote1
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_git_cloning
https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_showing_your_remotes
https://git-scm.com/docs/git-clone
```


{{"git commit"}}
A command that takes everything currently in the Staging Area and saves it permanently as a Commit Object in the Repository.

{{"git commit --amend"}}
A command that allows you to seamlessly modify the most recent commit. Architecturally, Git's strict rule of immutability means this command cannot actually "edit" the existing commit. Instead, it takes whatever new changes are currently in the Staging Area, merges them with the contents of the previous commit, and forges a brand new Commit Object to replace the old one. This provides a highly safe way to fix a typo or add any other extra content.

```curated-resources
https://learngitbranching.js.org/?level=mixed2
https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git/927386#927386?alternative-strategy
https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---amend
https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#:~:text=Changing%20the%20Last%20Commit
```

{{"git diff"}}
A command that compares two **states** (e.g., Working Directory vs. Staging Area, or Branch A vs. Branch B) and outputs the line-by-line differences. It dives into the files themselves to show you the exact additions (usually in green with a `+`) and deletions (usually in red with a `-`).

You can pass two branch names to the command (e.g., `git diff main..feature-branch`) to safely preview how two timelines have diverged before you attempt to merge them. This allows you to review a colleague's work (or an experimental branch) in its entirety before bringing it into your main codebase.

{{"git fetch"}}
Downloads new data (commits, files, refs) from a remote repository but **does not** integrate it into your working files. It updates your **Remote Tracking Branches**.

{{"git fetch --prune"}}
A maintenance command that syncs your local database with the server while simultaneously cleaning up dead references. It downloads the latest data, but also **automatically deletes any local remote-tracking branches** (e.g., `origin/old-feature`) if those branches have already been deleted on the remote server.

{{"git gc"}}
Git's internal "garbage collection" maintenance command. It optimizes repository performance by compressing reachable loose objects into **Packfiles** and permanently deleting unreachable (dangling) objects. Importantly, to prevent accidental data loss, `git gc` enforces a strict grace period of 30 days before it will actually delete a dangling object.

{{"git init"}}
A command that transforms a regular folder into a Git Repository. It creates the hidden .git directory, setting up the database structures needed to start tracking changes.

{{"git log"}}
A command that lists the history of Commit Objects in reverse chronological order (newest first). It allows you to browse past snapshots and read their author messages.

```curated-resources
https://git-scm.com/docs/git-log
https://learngitbranching.js.org/?level=rampup2
https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History#_viewing_history
https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History#_limiting_log_output
https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_what_is_introduced
https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_the_shortlog
https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#_double_dot
https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#_triple_dot
https://git-scm.com/book/en/v2/Git-Tools-Searching#_git_log_searching
https://git-scm.com/book/en/v2/Git-Tools-Searching#_line_log_search
```


{{"git ls-files"}}
A low-level command to view the raw content of the **Index** (Staging Area).

{{"git merge"}}
An integration command that takes the history of a specified branch and fuses it into your currently active branch. Depending on the branch history, it will either perform a **Fast-Forward Merge** or forge a new, multi-parent "merge commit."

{{"git merge --ff-only"}}
A strict way to combine history that **refuses** to create a merge commit. It only moves the branch pointer forward if the history is linear (a straight line).

{{"git pull"}}
A convenience command that runs [git fetch](<node:git fetch>) followed immediately by [git merge](<node:git merge>). It updates your current branch with changes from the remote.

Since Git version 2.27, if your local branch and the remote branch have diverged, Git will ask you to configure [pull.rebase](<node:pull.rebase>), [pull.ff](<node:pull.ff>), or specify a flag.

![img](https://github.com/JpOnline/assets/blob/main/looset/git/git-pull-XwVzT.png?raw=true)

```curated-resources
https://git-scm.com/docs/git-pull
https://youtu.be/mAFoROnOfHs?si=c78DSGxRarfZzA8y&t=3356
https://youtu.be/mAFoROnOfHs?si=SMVz-lGiPX5_7hH0&t=3527
https://stackoverflow.com/a/292359
https://stackoverflow.com/a/34438903
https://learngitbranching.js.org/?level=remote4
https://learngitbranching.js.org/?level=remoteAdvanced8
https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling
https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#_pulling
```


{{"git push"}}
Uploads your local branch commits to a **Remote Repository**. It only works if your local history is up-to-date with the remote.

```curated-resources
https://git-scm.com/docs/git-push
https://youtu.be/mAFoROnOfHs?si=EBcHEc1WmtY2A1Ny&t=3441
https://stackoverflow.com/a/2003515
https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely/2003515#comment49055443_2003515
https://learngitbranching.js.org/?level=remote6
https://learngitbranching.js.org/?level=remoteAdvanced1
https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_pushing_remotes
https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#_pushing_branches
https://git-scm.com/book/en/v2/Git-Internals-The-Refspec#_pushing_refspecs
```


{{"git push --delete"}}
A command used to permanently remove a branch or tag from a **Remote Repository**. After a **Feature Branch** is successfully merged (or abandoned), it is best practice to clean up the shared server. Executing this command (e.g., `git push --delete origin feature-branch`) destroys the remote pointer, but importantly, it *does not* automatically delete your local copy of that branch.

{{"git push --tags"}}
By default, `git push` does NOT send tags to the server. You must explicitly use this flag to upload your release milestones to the network.

{{"git push -f"}}
Short for `--force`. A highly destructive command that forcefully overwrites the Remote Repository's timeline to perfectly match your local timeline, permanently discarding any upstream commits that you do not have locally.

{{"git push -u"}}
Short for `--set-upstream`. A command typically used on the very first push of a new branch. It uploads your branch to the server and simultaneously configures your local branch to track the remote one, enabling short-hand `git push` and `git pull` commands in the future.

{{"git rebase"}}
Is a history-rewriting command that moves a branch to a new base commit of a branch. It takes the unique commits from your current branch, temporarily saves them, updates your branch to point to the new base commit, and then sequentially reapplies your saved commits one by one. Architecturally, this forges entirely **new Commit Objects** (with new SHA-1 hashes) while keeping the code changes intact. This creates a clean, linear project history. **Warning:** Never rebase commits pushed to a shared repository, as it will fundamentally break your team's collaborative timeline.


```curated-resources
https://git-scm.com/docs/git-rebase
https://learngitbranching.js.org/?level=intro4
https://learngitbranching.js.org/?level=advanced1
https://git-scm.com/book/en/v2/Git-Branching-Rebasing#_rebasing
https://youtu.be/mAFoROnOfHs?si=q2o_6Mcygscr1qfV&t=4345
```

{{"git rebase -i"}}
The **interactive** mode of [rebase](<node:git rebase>). It allows you to squash, edit, reorder, or drop specific commits in a list, essentially rewriting history.

{{"git reflog"}}
(Reference Logs) is a local journal tracking every movement of the `HEAD` pointer, regardless of whether you committed, checked out a branch, reset, or rebased. This makes it the ultimate recovery tool, allowing you to locate the hashes of "lost" commits and undo catastrophic mistakes like a hard reset.

```curated-resources
https://git-scm.com/docs/git-reflog
https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#_git_reflog
https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery#_data_recovery
```

{{"git remote"}}
A command to manage the set of **tracked repositories**. It allows you to view, add, or remove connections to servers (like GitHub/GitLab).

{{"git reset"}}
A powerful command that moves the **HEAD** and Branch pointer backward to a previous commit. It can also modify the Index and Working Directory depending on the mode (Soft/Mixed/Hard). Default mode is Mixed.

### **The "Three Trees" of Reset**

1. **\--soft**: Moves HEAD. (Stops there).  
2. **\--mixed (the default)**: Moves HEAD → Updates the Staging Area. (Stops there).  
3. **\--hard**: Moves HEAD → Updates the Staging Area → Overwrites the Working Directory.

```curated-resources
https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git/927386#927386
https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git/927386#comment6443962_927386
https://stackoverflow.com/a/348234
https://stackoverflow.com/questions/348170/how-do-i-undo-git-add-before-commit/348234#comment64260353_348234
https://learngitbranching.js.org/?level=rampup4
https://git-scm.com/docs/git-reset
https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
```

{{"git reset --hard"}}
A destructive history-rewriting command that moves the **HEAD** pointer backward, and forcefully overwrites both the **Staging Area** and the **Working Directory** to perfectly match that older commit. Any uncommitted work or currently staged changes are permanently deleted.

```curated-resources
https://git-scm.com/docs/git-reset#Documentation/git-reset.txt---hard
https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
```

{{"git reset --soft"}}
A history-rewriting command that moves the **HEAD** pointer backward to a previous commit, but leaves your **Staging Area** and **Working Directory** completely untouched. It effectively "un-commits" your recent work, leaving all those changes already staged and ready to be grouped into a new commit.

```curated-resources
https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git/927386#927386
https://git-scm.com/docs/git-reset#Documentation/git-reset.txt---soft
https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
```

{{"git restore"}}
A modern command specifically designed to discard uncommitted changes in the **Working Directory** or **Staging Area**.

{{"git revert"}}
Creates a **new commit** that does the exact opposite of the target commit. Best for teams because it doesn't break others' history.

`git revert <commit_id>`

```curated-resources
https://git-scm.com/docs/git-revert
https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging
https://www.atlassian.com/git/tutorials/undoing-changes/git-revert
https://youtu.be/mAFoROnOfHs?si=G-ibDDoKzriwO2hI&t=4191
https://learngitbranching.js.org/?level=rampup4
```


{{"git stash"}}
Temporarily shelves (hides) your uncommitted changes so you can work on a clean directory. You can **pop** the changes back later.

{{"git status"}}
A command that reports the current state of the Working Directory and Staging Area. It tells you which files are modified, which are staged for commit, and which are untracked.

It looks at the [upstream](<node:Upstream Branch>) linkage to tell you exactly how many commits you need to push or pull.

```curated-resources
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_checking_status
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_short_status
https://git-scm.com/docs/git-status
```


{{"git tag"}}
A command used to permanently mark specific points in a repository's history as important. While branches are constantly moving pointers that track ongoing development, tags are static, immovable pointers typically used to capture release points (e.g., `v1.0.0`, `production-release`).

{{"git tag -a"}}
Creates an **annotated tag**, which is a permanent milestone (like a `v1.0` release). Unlike a lightweight tag, it generates a brand new Object in the Git database containing the tagger's name, a timestamp, and a custom message, making it the standard for public releases.


{{"HEAD"}}
The special **pointer** that indicates "you are here." It typically points to a Branch name (attached state) and last commit, but can point directly to a Commit hash (detached state).

One of the "Three Trees", others are the [Staging Area (Index)](<node:Staging Area (Index)>) and [Working Directory](<node:Working Directory>).

{{"Immutability"}}
Every object is identified by a 40-character SHA-1 hash derived directly from its content and a brief header. Because the identifier is a cryptographic hash of the data, any theoretical attempt to change the data would result in a completely different hash, thus creating a brand new object rather than modifying the existing one. This guarantees absolute integrity of historical states.

```curated-resources
https://youtu.be/lG90LZotrpo?si=-xdTzsdkl2izfZG4&t=562
https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_git_generally_only_adds_data
```


{{"Local Config"}}
The repository-specific configuration scope. Settings applied here (stored in `.git/config`) strictly apply to the current project and will override any conflicting Global or System-level Git configurations.

{{"Local Repository"}}
The copy of the Git database and project history that resides physically on your personal computer. It acts as the counterpart to the Remote Repository during synchronization.

```curated-resources
https://git-scm.com/docs/gitrepository-layout
https://www.youtube.com/watch?v=mAFoROnOfHs&t=377s
https://stackoverflow.com/a/2003515
https://stackoverflow.com/a/37320788
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_nearly_every_operation_is_local
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_initializing_a_repository_in_an_existing_directory
https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server#_getting_git_on_a_server
```


{{"main"}}
The default starting branch created when you initialize a new Git repository. Crucially, `main` is just a **community convention**, not a technical requirement. Git itself does not treat this branch any differently than a branch named `bugfix` or `testing`; it is simply a standard, movable pointer.

**Historical Note:** For over a decade, the default name hardcoded into Git and platforms like GitHub was **`master`**. Around 2020, the software industry widely shifted to **`main`** to use more inclusive language. You will still frequently encounter `master` in older tutorials, legacy repositories, and older versions of Git, but functionally, the two names behave exactly the same.



{{"master"}}
The traditional default name for the primary timeline in a Git repository. While modern workflows and platforms have largely transitioned to using `main` as the default, functionally, it is simply a standard branch pointer with no special internal mechanics.

{{"Merge Conflicts"}}
A state that occurs when Git cannot automatically reconcile differences between two commits (usually when the same line was edited differently).

{{"origin"}}
The standard, conventional shorthand name that Git automatically assigns to the primary remote server you cloned your project from. It is simply an alias for a URL, saving you from typing the full network address every time you want to sync your data.

{{"origin/main"}}
The most standard example of a **Remote-Tracking Branch**. It is a local, read-only bookmark that caches the last known location of the `main` branch on the remote server named `origin`.

{{"Packfile"}}
A highly compressed, read-only binary archive file (`.pack`) paired with an index (`.idx`). To save disk space, Git periodically bundles thousands of individual loose objects together into these single files using a **Reverse Delta Compression**, sorting your files and by the newest, largest versions, then, it looks at the older versions of that files and calculates the deltas backwards.

{{"pseudoref"}}
Special, temporary reference pointers managed by Git (such as `MERGE_HEAD`, `FETCH_HEAD`, or `CHERRY_PICK_HEAD`). They are dynamically generated to track the mathematical state of multi-step, ongoing operations.

{{"Pull Request / Merge Request"}}
A feature of hosting platforms (GitHub/GitLab), not Git itself. It is a **request** to merge a branch into the main codebase, allowing for code review and discussion.

{{"pull.ff"}}
A configuration setting that dictates how [git pull](<node:git pull>) handles merges. Setting this to only strictly limits the command to [Fast-Forward Merge](<node:Fast-Forward Merge>), causing the pull to abort safely rather than creating an unexpected merge commit if the local and remote histories have diverged.

```curated-resources
https://git-scm.com/docs/git-config#Documentation/git-config.txt-pullrebase
```

{{"pull.rebase"}}
A configuration setting that changes the default integration strategy of [git pull](<node:git pull>). When enabled, it forces Git to rebase your local commits on top of the fetched tracking branch instead of generating a standard merge commit. It is widely used by teams to maintain a clean, linear project history.

```curated-resources
https://git-scm.com/docs/git-config#Documentation/git-config.txt-pullff
```

{{"refs/remotes/"}}
The hidden sub-directory inside `.git/refs/` where Git physically stores the pointer files for all **Remote-Tracking Branches**. This physical separation guarantees they never accidentally overwrite your local branches.

{{"Relative Refs"}}
A syntax to refer to parents of a commit, such as HEAD~1 (grandparent) or HEAD^ (first parent). Essential for navigation during resets.

{{"Remote Repository"}}
A version of your project hosted on the internet or a network. It is the central hub for synchronization.

```curated-resources
https://git-scm.com/docs/git-remote
https://youtu.be/mAFoROnOfHs?si=F6YVvZqBrP5QO5SU&t=2751
https://stackoverflow.com/a/2791156
https://www.youtube.com/watch?v=mAFoROnOfHs&t=377s
https://learngitbranching.js.org/?level=remote1
https://learngitbranching.js.org/?level=remoteAdvanced3
https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_remote_repos
https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_inspecting_remote
https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#_remote_branches
https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_receive_denydeletes
```


{{"Remote-Tracking Branch"}}
A local, read-only cache of a branch's state on a remote server. You cannot commit to these branches directly; they only move forward when you explicitly synchronize with the network using `git fetch` or `git pull`.

{{"Repository (.git)"}}
The hidden folder (named .git) inside your project. It is the database that stores all the snapshots, commits, and configuration settings. If you delete this folder, you lose the project's history.

```curated-resources
https://git-scm.com/docs/gitrepository-layout
https://www.youtube.com/watch?v=mAFoROnOfHs&t=377s
https://stackoverflow.com/a/2003515
https://stackoverflow.com/a/37320788
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_nearly_every_operation_is_local
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_initializing_a_repository_in_an_existing_directory
https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server#_getting_git_on_a_server
```


{{"SHA-1 Hash"}}
A 40-character cryptographic string generated from the contents of a file or commit. It acts as the permanent, mathematically unique ID for every Object in the Git database.

{{"Snapshot"}}
A complete record of what all the files in your project looked like at a specific moment in time. Unlike a backup, it is efficient and only stores files that have changed, reusing the ones that haven't.

{{"Staging Area"}}
The **conceptual workspace** where you craft your next commit. Unlike a simple "save" button, it allows you to pick and choose specific changes—even parts of a single file—to include in a snapshot while leaving unfinished work behind. It serves as a **draft** or **proposal** for the next commit.

```curated-resources
https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-index
https://youtu.be/ZDR433b0HJY?si=svvsTtOrsrQuUJ2y&t=2648
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_the_three_states
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_recording_changes_to_the_repository
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_staging_modified_files
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_skipping_the_staging_area
https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things#_unstaging
https://stackoverflow.com/a/62569076
```


{{"Staging Area (Index)"}}
The **intermediate zone** between your working directory and the repository. It acts as a "loading dock" where you review and prepare specific changes before permanently recording them in the history. It combines the conceptual workflow (**Staging Area**) with the technical implementation (**Index**).

One of the "Three Trees", others are the [Working Directory](<node:Working Directory>) and [HEAD](<node:HEAD>).

```curated-resources
https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-index
https://youtu.be/ZDR433b0HJY?si=svvsTtOrsrQuUJ2y&t=2648
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_the_three_states
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_recording_changes_to_the_repository
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_staging_modified_files
https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_skipping_the_staging_area
https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things#_unstaging
https://stackoverflow.com/a/62569076
```


{{"Tag (Lightweight)"}}
A fixed, immutable **pointer** to a specific commit. Unlike a branch, it does not move. It acts as a "bookmark" for important moments like releases (v1.0).

{{"Tag Object (Annotated)"}}
A full Git object containing the tagger’s name, email, date, and message. It points to a commit and is stored in the database.

{{"Tracking Branch"}}
A local, read-only branch (like origin/main) that represents the **last known state** of a branch on the remote server. You cannot commit to it directly.

{{"Tree"}}
The conceptual representation of a directory (folder) within Git's architecture. It serves to group files together and can nest other directories within it to map out your file system.

{{"Tree Object"}}
The physical, immutable data structure stored in the `.git/objects` database representing a saved directory state. It explicitly lists file names, permissions, and the corresponding SHA-1 hashes of the Blobs and sub-Trees it contains.

{{"Upstream"}}
The link between a local branch and a remote branch. If main has origin/main as its upstream, git push knows where to send the code without arguments.

{{"Upstream Branch"}}
It is the configuration tether that binds your active local branch strictly to the server's cached representation of that branch.

[origin/main](<node:origin/main>) is the Upstream Branch of [main](<node:main>).

Stored in [.git/config](<node:.git/config>):
```ini, TOML
[branch "main"]
    remote = origin
    merge = refs/heads/main
```

Setup through:
The Automatic Way with [git clone](<node:git clone>).
The First Push with [git push -u](<node:git push -u>).
The Manual Link with [git branch --set-upstream-to](<node:git branch --set-upstream-to>).

```curated-resources
https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-upstreambranch
```

{{"Upstream Repository"}}
An Upstream Repository is the specific remote repository that your local branch considers its "parent" or "source of truth."

* It dictates the **flow of data**. It is the default place Git looks when you type `git pull` or `git push` without specifying a URL.  
* *Every Upstream is a Remote, but not every Remote is an Upstream.*

{{"user.email"}}
A configuration setting that links your commits to an email address. This is used by services like GitHub to associate the code with your user profile.

{{"user.name"}}
A configuration setting that tells Git who you are. This name is "burned" into every commit you create, becoming a permanent part of the history.

{{"Workflows (Git Flow/Trunk)"}}
High-level patterns for managing branches. **Git Flow** uses long-lived feature/release branches; **Trunk-Based** focuses on rapid integration into a single main branch.

{{"Working Directory"}}
Also known as **Working Tree**, it's the actual folder on your computer where you can see, edit, and delete files. It is your "workbench" where you do your work before asking Git to track it.

One of the "Three Trees", others are the [Staging Area (Index)](<node:Staging Area (Index)>) and [HEAD](<node:HEAD>).

```curated-resources
https://youtu.be/BIjrKuJGTxw?si=bypPA-5KJ4F5oEq0&t=145
https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-workingtree
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#:~:text=Undoing%20Things.-,The%20Three%20States,-Pay%20attention%20now
https://www.youtube.com/watch?v=mAFoROnOfHs&t=377s
```

{{".git/config" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".git/FETCH_HEAD" -"is a"-> "pseudoref"}}


{{".git/HEAD" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".git/hooks" -"stored in"-> "Repository (.git)"}}
The hooks folder is created automatically inside the hidden Git database when you run `git init`.

{{".git/index (Index)" -"formerly known as"-> "Cache"}}
In the very early days of Git, the staging area was called the "Cache" because it cached the file contents before writing them to the database. You still see this legacy name in commands like `git diff --cached` (which does the same thing as `git diff --staged`).

{{".git/index (Index)" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".git/index (Index)" -"represents proposed"-> "Snapshot"}}
The Staging Area acts as a preview or a draft. Whatever is in the Staging Area right now is exactly what the Snapshot will look like if you run the commit command.

{{".git/MERGE_HEAD" -"is a"-> "pseudoref"}}


{{".git/objects" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".gitignore" -"filters"-> "git status"}}
Patterns in this file prevent Untracked Files from showing up in status.

{{"❓ Delete local and remote branches" -"solved by"-> "git branch -d"}}
Assuming it's "safe" to delete the branch without losing work, i.e., the branch was merged already, check the following solution:

[git branch -d [branch-name]](<node:git branch -d>)

{{"❓ Delete local and remote branches" -"solved by"-> "git branch -D"}}
As you want to delete the branch, ignoring unmerged commits, check the following solution:

[git branch -D [branch-name]](<node:git branch -D>)

{{"❓ Delete local and remote branches" -"solved by"-> "git fetch --prune"}}
As your local repository is cluttered with tracking references to branches that have already been deleted on the remote server, you can clean your local cache by syncing your state. Check the following solution:

[git fetch --prune](<node:git fetch --prune>)


{{"❓ Delete local and remote branches" -"solved by"-> "git merge"}}
Since the work on this branch is complete and you want to safely integrate its commits before deleting the branch, you must first switch to your primary branch and pull the changes in with the command `git checkout main && git merge <branch-name>`.

{{"❓ Delete local and remote branches" -"solved by"-> "git tag"}}
To remove this branch from your active workflow while permanently preserving its code as a read-only snapshot, you can convert it into an archive tag before destroying the branch pointer with the command `git tag archive/  && git branch -D`.

{{"❓ Delete local and remote branches" -"solved by"-> "git branch"}}
To keep this experiment fully intact as a working branch but visually organize it out of your main list, you can rename it using a directory-style namespace. Check the following solution:

[git branch -m  archive/<branch-name>](<node:git branch>)

{{"❓ Delete local and remote branches" -"solved by"-> "git diff"}}
Before making a permanent decision, it is wise to review exactly what unique work exists on this branch compared to your main codebase. To see a summary of the commits and the actual line-by-line code changes, use the following commands:

Run `git log main..<branch-name> --oneline` and `git diff main..<branch-name>`.

{{"❓ Pull vs Fetch" -"solved by"-> "git pull"}}
Assuming you want to integrate the remote changes right away (and not analize them first) and also assuming you have a "clean" Working Directory (all changes committed), you can check the following solution:

[git pull](<node:git pull>)

{{"❓ Pull vs Fetch" -"solved by"-> "git fetch"}}
To download remote changes and analyze them before integrating into your local branch, check the following solution:

[git fetch](<node:git fetch>)

{{"❓ Pull vs Fetch" -"solved by"-> "git commit"}}
As you want to save your currently changes before integrating remote changes, follow the pattern [git commit](<node:git commit>) -> [git fetch](<node:git fetch>) -> [git merge](<node:git merge>).

{{"❓ Pull vs Fetch" -"solved by"-> "git reset"}}
As you don't want to keep your local changes, you can discard them with [git reset](<node:git reset>), and assuming no other changes were made in the branch, you can run [git pull](<node:git pull>) to download and integrate remote changes.

{{"❓ Pull vs Fetch" -"solved by"-> "git stash"}}
To temporary "hide" your local changes, you can use [git stash](<node:git stash>), then use [git fetch](<node:git fetch>) to analyze changes in the remote branch.

{{"❓ Pull vs Fetch" -"solved by"-> "Feature Branching"}}
When multiple people work directly on a shared branch, the repository acts like a single, highly crowded workbench. You are constantly having to move your half-built changes aside (stashing) just to accept the latest changes from someone else (pulling), which is prone to errors.

Adopt the following workflow to work in isolation and have controlled integrations:

[Feature Branching Workflow](<node:Feature Branching>)

{{"❓ Undo last commits" -"solved by"-> "git commit --amend"}}
If you just want to include more changes into the last commit, check the following node for a solution:

[git commit --amend](<node:git commit --amend>)

{{"❓ Undo last commits" -"solved by"-> "git push -f"}}
If the commit you want to change is already pushed, but rewriting history is safe, then check the following node for a solution:

[git push -f](<node:git push -f>)

{{"❓ Undo last commits" -"solved by"-> "git reset"}}
If the history can be changed, check the following node for a solution:

[git reset](<node:git reset>)

{{"❓ Undo last commits" -"solved by"-> "git reset --hard"}}
To undo the commit and permanently delete commit's changes, check the following node for a solution:

[git reset --hard](<node:git reset --hard>)

{{"❓ Undo last commits" -"solved by"-> "git reset --soft"}}
If you want to undo the commit and keeep the changes in your index, check the following node for a solution:

[git reset --soft](<node:git reset --soft>)

{{"❓ Undo last commits" -"solved by"-> "git revert"}}
Assuming you have already pushed these commits to a remote server in a branch others are working on, check the following node for a solution:

[git revert](<node:git revert>)

{{"Atomic Commits" -"facilitates"-> "git cherry-pick"}}
Small, focused commits are incredibly easy to copy-paste onto other branches compared to massive "end of day" commits.

{{"Atomic Commits" -"facilitates"-> "git revert"}}
If a commit does only one specific thing (atomic), reverting it later will cleanly undo that feature without breaking unrelated code.

{{"Branch" -"points to"-> "Commit Object"}}
A branch is just a text file containing the hash of the latest commit.

{{"Commit Object" -"stored in"-> ".git/objects"}}
Every saved snapshot is compressed, hashed, and physically stored inside the `.git/objects` subfolder of the repository.

{{"Commit Object" -"points to"-> "Commit Object"}}
Each commit (except the first) points to its parent, forming the DAG.

{{"Commit Object" -"contains"-> "Snapshot"}}
Every commit holds exactly one snapshot. The commit acts as the envelope (with the stamp and address), and the snapshot is the letter inside.

{{"Commit Object" -"contains"-> "Tree Object"}}
Coming soon..

{{"Commit Object" -"requires"-> "user.email"}}
Similar to the name, an email is mandatory metadata for every commit to ensure the history can be attributed to a real person.

{{"Commit Object" -"requires"-> "user.name"}}
Git will not let you save a commit without an author name. It needs this to permanently sign the work.

{{"DAG (Directed Acyclic Graph)" -"is composed of"-> "Commit Object"}}
The Directed Acyclic Graph is the structure formed by the parent linkages.

{{"Dangling Commit" -"contains"-> "Dangling Tree"}}
If a Dangling Commit is the only object in the database referencing a specific Tree Object, that Tree will also effectively become dangling once the commit is purged.

{{"Feature Branching" -"relies on"-> "Branch"}}
The entire methodology is built on Git's ability to create lightweight, disposable pointers for parallel development.

{{"Feature Branching" -"avoids"-> "Merge Conflicts"}}
(Or rather, delays and isolates them). It prevents developers from constantly stepping on each other's toes in the main branch on every single commit.

{{"git add" -"calculates the"-> "Blob Object"}}
Before anything is moved, Git performs a hash calculation. `git add` **calculates the SHA-1 hash** of the file’s current content to create a **Blob Object**. If the file's content has changed since the last add, a new unique hash is generated to represent that specific version of the data.

{{"git add" -"updates"-> "Staging Area (Index)"}}
This command takes the file as it looks right now in your workspace and copies that version into the draft space (Index), making it ready to be saved.

{{"git add" -"add Blob and file path in"-> "Staging Area (Index)"}}
Once the Blob is created, Git must remember which file it belongs to. git add **records the Blob's hash and the file's path** together within the **Staging Area (Index)**. This creates the link between the "untyped" data in the Blob and the actual filename used in your directory structure.

{{"git add" -"promotes changes from"-> "Working Directory"}}
When you run git add, you are **promoting changes** from your Working Directory (the files you see and edit) to the Staging Area. This signals to Git that these specific modifications are ready to be packaged into the next snapshot of the project.

{{"git add" -"can create"-> "Dangling Blob"}}
If you stage a file, edit it, and stage it again, the first generated Blob object loses its reference in the Staging Area and becomes dangling.

{{"git bisect" -"navigates"-> "DAG (Directed Acyclic Graph)"}}


{{"git branch" -"creates"-> "Branch"}}
Creates a new pointer to the current commit.

{{"git branch -d" -"variant of"-> "git branch"}}


{{"git branch -D" -"variant of"-> "git branch"}}


{{"git branch -r" -"lists"-> "refs/remotes/"}}
The specific inspection command used to view all your Remote-Tracking Branches without showing local branches.

{{"git branch -vv" -"inspects"-> "Upstream Branch"}}
This specific flag (very verbose) lists all your local branches and explicitly prints the name of the upstream branch they are tethered to, if one exists.

{{"git checkout" -"updates"-> "HEAD"}}
Moves the HEAD pointer to the specified branch.

{{"git checkout [hash]" -"triggers"-> "Detached HEAD"}}
Moving HEAD to a specific commit disconnects it from any branch.

{{"git cherry-pick" -"creates new"-> "Commit Object"}}


{{"git clone" -"downloads from"-> "Remote Repository"}}
Sets up the 'origin' configuration pointing to the URL.

{{"git clone" -"creates"-> "Local Repository"}}


{{"git clone" -"configures"-> "origin"}}


{{"git clone" -"populates"-> "Working Directory"}}


{{"git commit" -"creates"-> "Commit Object"}}
This action freezes the current Staging Area into a permanent object in the database, generating a unique ID (hash) for it.

{{"git commit --amend" -"replaces"-> "Commit Object"}}
Creates a NEW commit (new hash) that replaces the previous tip.

{{"git commit --amend" -"replaces"-> "Commit Object"}}
It takes the current Staging Area and the parent's metadata to forge a completely new Commit Object, making the old one obsolete.

{{"git commit --amend" -"respects"-> "Immutability"}}
Even though it feels like you are editing a save file, the command strictly obeys Git's read-only database rules by leaving the original object structure intact and building a completely new one.

{{"git commit --amend" -"consumes"-> "Staging Area (Index)"}}
The command actively looks at your draft space. Any files you have newly staged will be permanently baked into the replacement commit alongside the original files.

{{"git commit --amend" -"can creates"-> "Dangling Commit"}}
Because amending replaces the previous tip of the branch with a new commit, the original, replaced commit is instantly orphaned and becomes dangling.

{{"git commit --no-verify" -"bypasses"-> ".git/hooks"}}
This command flag allows a user to intentionally skip the client-side commit hooks during an emergency fix.

{{"git diff" -"compares"-> "Working Directory"}}
By default (with no extra flags), this command shows all un-staged modifications by comparing your active workspace directly against the Index.

{{"git fetch" -"creates / updates"-> ".git/FETCH_HEAD"}}
Logs the exact commit hashes that were just downloaded. This is the crucial, hidden bridge file used by git pull.

{{"git fetch" -"updates"-> "origin/main"}}
Moves this specific tracking pointer forward to perfectly mirror the new state of the server.

{{"git fetch" -"downloads from"-> "Remote Repository"}}
Retrieves new commits and data from the remote server, but strictly stops there.

{{"git fetch" -"updates"-> "Tracking Branch"}}
Downloads data and moves 'origin/main' to match the server.

{{"git fetch --prune" -"variant of"-> "git fetch"}}


{{"git gc" -"cleans up"-> "git reflog"}}


{{"git gc" -"permanently deletes"-> "Dangling Object"}}
When run, the garbage collector scans for objects that have been completely unreachable for longer than the 30-day grace period, and physically deletes them from your hard drive.

{{"git gc" -"compresses into"-> "Packfile"}}
During its optimization routine, the garbage collector takes all "live" (reachable) loose objects and squashes them into a highly efficient Packfile.

{{"git init" -"creates"-> "Repository (.git)"}}
Running this command physically generates the database folder on your computer. Before this, you just have files; after this, you have a Git project.

{{"git log" -"reads"-> "Commit Object"}}
This command opens the database and reads the metadata (author, date, message) from the saved commits to show you the project's history.

{{"git log" -"reads"-> "Commit Object"}}
It extracts and displays the metadata stored inside the commit (author, date, message, and hash) without altering it.

{{"git log" -"traverses"-> "DAG (Directed Acyclic Graph)"}}
To build the timeline, the command strictly follows the parent-pointers mathematically linking the commits together from newest to oldest.

{{"git merge" -"resolves via"-> "Merge Conflicts"}}
If automatic merging fails, the user must manually resolve the overlapping edits.

{{"git merge" -"combines"-> "origin/main"}}
Takes the isolated tracking branch and attempts to fuse its history into your current local main.

{{"git merge" -"utilizes"-> "Staging Area"}}
If the merge results in a conflict, Git uses the Index to store the base, local, and remote versions of the file until you resolve it.

{{"git merge --ff-only" -"allow only"-> "Fast-Forward Merge"}}


{{"git merge --ff-only" -"is a variant of"-> "git merge"}}


{{"git pull" -"reads from"-> ".git/FETCH_HEAD"}}
Rather than magically knowing what to merge, git pull explicitly tells git merge to integrate the commit hashes recorded in FETCH_HEAD.

{{"git pull" -"executes"-> "git fetch"}}
The first half of a pull is identical to running a standard fetch, syncing the local database.

{{"git pull" -"executes"-> "git merge"}}
By default, the second half of a pull attempts to integrate the newly fetched data into your active branch.

{{"git push" -"updates"-> "Remote Repository"}}
Sends local commits to the server, updating the remote reference.

{{"git push --delete" -"variant of"-> "git push"}}


{{"git push --tags" -"syncs with"-> "Remote Repository"}}


{{"git push --tags" -"variant of"-> "git push"}}


{{"git push -u" -"creates"-> "Upstream Branch"}}
The `-u` (or `--set-upstream`) flag is the explicit command used to push a new local branch to a server AND permanently establish the linkage for the future.

{{"git rebase" -"rewrites"-> "Commit Object"}}
Copies existing commits to a new base, generating new hashes.

{{"git rebase" -"updates"-> "Working Directory"}}
Like a merge, rebasing modifies the actual files on your hard drive so you can see the newly integrated code.

{{"git rebase" -"is alternative to"-> "git merge"}}
Both commands solve the problem of integrating branches, but rebase rewrites history for a linear graph, while merge preserves the true parallel history.

{{"git rebase -i" -"variant of"-> "git rebase"}}


{{"git reflog" -"locates"-> "Dangling Commit"}}
More specifically Dangling Commits

{{"git reflog" -"tracks movement of"-> "HEAD"}}
It is a private, local journal that records exactly where HEAD was pointing at any given time, regardless of what happened to the branches.

{{"git remote" -"manages"-> "Remote Repository"}}
It provides the interface to list, add, remove, or rename the server connections that your local project is currently tracking.

{{"git reset" -"moves"-> "HEAD"}}
The primary function of reset is to pick up the HEAD pointer (and the branch it's attached to) and drop it onto an older commit.

{{"git reset" -"uses"-> "Relative Refs"}}
You almost always combine these, telling Git to move the pointer relative to where you currently are (e.g., `git reset HEAD~2`).

{{"git reset" -"clears"-> "Staging Area (Index)"}}
The default mode (--mixed) will wipe the staging area to make it perfectly match the target commit.

{{"git reset --hard" -"is a variant of"-> "git reset"}}


{{"git reset --hard" -"clears"-> "Staging Area (Index)"}}
In addition to destroying uncommitted work in your Working Directory, it violently wipes the Staging Area so it perfectly matches the older target commit.

{{"git reset --hard" -"overwrites"-> "Working Directory"}}
Destructively resets files to match the target commit, discarding work.

{{"git reset --hard" -"can creates"-> "Dangling Commit"}}
By forcefully moving the HEAD pointer backward, any commits that were physically "in front" of the new pointer are left behind as dangling objects.

{{"git reset --soft" -"is a variant of"-> "git reset"}}


{{"git reset --soft" -"moves"-> "HEAD"}}
Steps back in history but keeps changes staged in the Index.

{{"git restore" -"un-stages from"-> "Staging Area"}}
When used with the `--staged` flag, it pulls a file out of the Staging Area back into the Working Directory.

{{"git restore" -"discards changes in"-> "Working Directory"}}
When used on a modified tracked file, it overwrites the local file with the version from the Index or the last Commit.

{{"git revert" -"inverts"-> "Commit Object"}}
Creates a new commit with the exact opposite changes of the target.

{{"git revert" -"creates"-> "Commit Object"}}
Instead of deleting history, it creates a brand new commit that contains the exact inverse of the changes from a previous commit.

{{"git revert" -"respects"-> "Immutability"}}
It is the safest "undo" command because it never alters existing commits, strictly adhering to the append-only nature of shared Git history.

{{"git stash" -"restores baseline to"-> "HEAD"}}
After saving your uncommitted work, it reverts your Working Directory to exactly match the last committed Snapshot.

{{"git stash" -"saves state of"-> "Working Directory"}}
Temporarily moves uncommitted work to a stack, cleaning the workspace.

{{"git stash" -"saves state of"-> "Working Directory"}}
It takes your messy, uncommitted modifications and bundles them away safely so you can switch contexts.

{{"git status" -"inspects"-> "Staging Area"}}
This command also checks the draft space to see what you have already queued up for the next save.

{{"git status" -"inspects"-> "Working Directory"}}
This command looks at your workspace to see what is different compared to the last time you saved.

{{"git tag" -"creates"-> "Tag (Lightweight)"}}
By default, running the command without flags creates a simple, static pointer to the current HEAD commit.

{{"git tag -a" -"creates"-> "Tag Object (Annotated)"}}
Using the `-a` (annotate) flag forces Git to forge a permanent, cryptographically hashed object in the `.git/objects` database.

{{"git tag -a" -"variant of"-> "git tag"}}


{{"HEAD" -"stored in"-> ".git/HEAD"}}
Coming soon..

{{"HEAD" -"points to"-> "Branch"}}
In a normal state, HEAD is a symbolic link to a branch name.

{{"HEAD" -"points to"-> "Commit Object"}}
In a detached state, HEAD points directly to a commit hash.

{{"Immutability" -"prevents editing of"-> ".git/objects"}}


{{"Immutability" -"is enforced by"-> "SHA-1 Hash"}}
Because an object's ID is derived directly from its content, you mathematically cannot change the content without the ID changing. This calculation fundamentally enforces immutability.

{{"Local Config" -"stored in"-> ".git/config"}}
Coming soon..

{{"Local Repository" -"synonym"-> "Repository (.git)"}}
Conceptually, the "Local Repository" refers to the entire database sitting on your personal machine, distinguishing it from the shared server.

{{"Local Repository" -"synonym"-> "Repository (.git)"}}


{{"main" -"historically known as"-> "master"}}
In older repositories and tutorials (pre-2020), the default starting branch was named `master`. Modern Git and hosting platforms now default to `main`.

{{"main" -"is a type of"-> "Tracking Branch"}}


{{"Merge Conflicts" -"occur in"-> "Staging Area"}}
During a conflict, the index holds 3 versions of the file (Base, Yours, Theirs).

{{"origin" -"is the default"-> "Upstream Repository"}}
When you clone a project, Git automatically creates a remote connection named origin and sets it as your primary upstream repository.

{{"origin/main" -"Upstream of"-> "main"}}
Your local branch constantly compares its own history against this tracking branch to determine if you are "ahead" or "behind."

{{"origin/main" -"is a type of"-> "Remote-Tracking Branch"}}
origin/main is a concrete example of this concept—a read-only bookmark of the server's state.

{{"Packfile" -"compresses"-> "Blob Object"}}
Stores objects efficiently using deltas to minimize disk usage.

{{"Packfile" -"intentionally excludes"-> "Dangling Object"}}
When Git builds a Packfile, it traces the DAG from your branches downward. Unreachable dangling objects are ignored and left as uncompressed "loose" objects until their 30-day timer expires.

{{"pull.ff" -"modifies behavior of"-> "git pull"}}


{{"pull.rebase" -"modifies behavior of"-> "git pull"}}


{{"refs/remotes/" -"stored in"-> "Local Repository"}}
The actual directory inside your .git folder where the "cached" server state lives.

{{"Relative Refs" -"navigates to"-> "Commit Object"}}
Symbols like `HEAD~1` or `HEAD^` allow you to target specific ancestor commits without needing to look up their exact SHA-1 hashes.

{{"Remote Repository" -"syncs with"-> "Local Repository"}}
The remote is a network counterpart to your local database. Commands like push and fetch move Commit Objects between these two locations.

{{"Remote Repository" -"contains"-> "Tracking Branch"}}
The server has its own branches which we track locally as read-only refs.

{{"Remote-Tracking Branch" -"stored in"-> "refs/remotes/"}}
To prevent chaos, Git physically isolates these tracking branches in this specific sub-folder so they never accidentally mix with your local branches.

{{"Repository (.git)" -"stored in"-> "Working Directory"}}
The database lives physically inside the root of your project folder (hidden by default), ensuring the history travels with the files.

{{"SHA-1 Hash" -"identifies"-> "Blob Object"}}
The raw content of a file is hashed. If two files have the exact same text, they will generate the exact same SHA-1 Hash, allowing Git to reuse the object and save space.

{{"SHA-1 Hash" -"identifies"-> "Commit Object"}}
Git uses the SHA-1 algorithm to calculate a 40-character checksum based on the commit's metadata and snapshot, ensuring it is uniquely identified.

{{"SHA-1 Hash" -"identifies"-> "Tag Object (Annotated)"}}
Annotated tags are stored in the database with their own message and tagger metadata, which are hashed to create a unique ID.

{{"SHA-1 Hash" -"identifies"-> "Tree Object"}}
The folder structure is hashed based on the list of files (Blobs) and subfolders it contains.

{{"Snapshot" -"is represented by"-> "Tree Object"}}
Coming soon..

{{"Staging Area" -"stored in"-> ".git/index (Index)"}}
This relationship connects the abstract concept to the physical reality. The Index is actually a single binary file located at `.git/index` on your hard drive, which contains the list of all tracked files and their checksums.

{{"Staging Area" -"concept of"-> "Staging Area (Index)"}}
Coming soon..

{{"Tag (Lightweight)" -"behaves like"-> "Branch"}}
Structurally, it is identical to a branch (a file containing a hash), with the sole exception that it is strictly read-only and never moves.

{{"Tree" -"implemented by"-> "Tree Object"}}
Coming soon..

{{"Tree Object" -"references"-> "Blob Object"}}
Maps a filename to a Blob hash.

{{"Upstream Branch" -"links"-> "Branch"}}


{{"Upstream Branch" -"links"-> "Remote-Tracking Branch"}}


{{"Upstream Repository" -"source of truth of a"-> "Local Repository"}}


{{"❓ How to bundle commits by date?" -"solved by"-> "git reset --soft"}}
Assuming the commits that will be bundled are the last ones commited, also assuming those commits were not pushed and there's no extra undesired commit between the ones you want to bundle, this mean you can use a pointer manipulation instead of a rebase. Here are the exact steps to execute this.

### **Identify the Base Commit SHA**

First find the first commit from where the bundle should start. You need the commit hash (SHA) of the snapshot immediately *prior* to your target commits.

Run a focused log command to view your recent history:

\[git log \--since="2026-03-24" \--format="%h \- %cd : %s" \--date=short\](\<node:git log\>)

Look at the output and copy the SHA of the last commit. We’ll use it with a `^` character in the next command.

### **Perform a Soft Reset**

Now, you will move your branch pointer back to that base commit, while leaving all your actual code changes perfectly intact and staged.

[git reset --soft <base-commit-sha>^](<node:git reset --soft>). Note the `^` char.

### **Verify and Commit the Bundle**

Finally, wrap all those staged changes into a single new commit:

[git commit](<node:git commit>)

