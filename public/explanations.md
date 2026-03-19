{{"SHA-1 Hash"}}
A 40-character cryptographic string generated from the contents of a file or commit. It acts as the permanent, mathematically unique ID for every Object in the Git database.

{{"git bisect"}}
A binary search tool that helps you find the specific commit that introduced a bug by asking you to mark versions as "good" or "bad."

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

{{"git commit --amend"}}
A command that allows you to seamlessly modify the most recent commit. Architecturally, Git's strict rule of immutability means this command cannot actually "edit" the existing commit. Instead, it takes whatever new changes are currently in the Staging Area, merges them with the contents of the previous commit, and forges a brand new Commit Object to replace the old one. This provides a highly safe way to fix a typo or add any other extra content.

```curated-resources
https://learngitbranching.js.org/?level=mixed2
https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git/927386#927386?alternative-strategy
https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---amend
https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#:~:text=Changing%20the%20Last%20Commit
```

{{"git blame"}}
A command that annotates every line of a file with the commit information (author, date, hash) that last modified it.

{{"git diff"}}
A command that compares two **states** (e.g., Working Directory vs. Staging Area, or Branch A vs. Branch B) and outputs the line-by-line differences.

{{"git clone"}}
A command that downloads a copy of an existing **Remote Repository** to your local machine, setting up the connection (remote) named origin automatically.

{{"git rebase"}}
A command that integrates changes from one branch into another by taking the commits from your current branch and "replaying" them one by one on top of a new base commit. Architecturally, Git's rule of immutability means it cannot physically move your existing commits. Instead, it calculates the differences, creates **brand new Commit Objects** (with entirely new SHA-1 hashes) that contain those exact same changes, and updates your branch pointer to this new linear timeline. You can also use git rebase to **reorder** or **combine** commits.

```curated-resources
https://git-scm.com/docs/git-rebase
```

{{"git log"}}
A command that lists the history of Commit Objects in reverse chronological order (newest first). It allows you to browse past snapshots and read their author messages.

{{"git add"}}
A command that moves changes from the Working Directory to the Staging Area. It tells Git, "I want this file to be part of the next snapshot."

{{"git status"}}
A command that reports the current state of the Working Directory and Staging Area. It tells you which files are modified, which are staged for commit, and which are untracked.

It looks at the [upstream](<node:Upstream Branch>) linkage to tell you exactly how many commits you need to push or pull.

{{"git commit"}}
A command that takes everything currently in the Staging Area and saves it permanently as a Commit Object in the Repository.

{{"git cherry-pick"}}
A command that takes the changes introduced by a specific commit (from anywhere in the graph) and applies them as a **new commit** on your current branch.

{{"git init"}}
A command that transforms a regular folder into a Git Repository. It creates the hidden .git directory, setting up the database structures needed to start tracking changes.

{{"git remote"}}
A command to manage the set of **tracked repositories**. It allows you to view, add, or remove connections to servers (like GitHub/GitLab).

{{"git branch"}}
A command used to list, create, or delete branches. It manages the **pointers** to commits but does not switch your working directory to them.

{{"Snapshot"}}
A complete record of what all the files in your project looked like at a specific moment in time. Unlike a backup, it is efficient and only stores files that have changed, reusing the ones that haven't.

{{"Packfile"}}
A compressed file that stores many Git objects together. It uses delta compression (storing differences) to save disk space.

{{"pull.rebase"}}
A configuration setting that changes the default integration strategy of [git pull](<node:git pull>). When enabled, it forces Git to rebase your local commits on top of the fetched tracking branch instead of generating a standard merge commit. It is widely used by teams to maintain a clean, linear project history.

```curated-resources
https://git-scm.com/docs/git-config#Documentation/git-config.txt-pullff
```

{{"pull.ff"}}
A configuration setting that dictates how [git pull](<node:git pull>) handles merges. Setting this to only strictly limits the command to [Fast-Forward Merge](<node:Fast-Forward Merge>), causing the pull to abort safely rather than creating an unexpected merge commit if the local and remote histories have diverged.

```curated-resources
https://git-scm.com/docs/git-config#Documentation/git-config.txt-pullrebase
```

{{"user.email"}}
A configuration setting that links your commits to an email address. This is used by services like GitHub to associate the code with your user profile.

{{"user.name"}}
A configuration setting that tells Git who you are. This name is "burned" into every commit you create, becoming a permanent part of the history.

{{"git pull"}}
A convenience command that runs [git fetch](<node:git fetch>) followed immediately by [git merge](<node:git merge>). It updates your current branch with changes from the remote.

Since Git version 2.27, if your local branch and the remote branch have diverged, Git will ask you to configure [pull.rebase](<node:pull.rebase>), [pull.ff](<node:pull.ff>), or specify a flag.

![img](https://github.com/JpOnline/assets/blob/main/looset/git/git-pull-XwVzT.png?raw=true)

{{"Feature Branching"}}
A core collaboration strategy where all new development—whether a major feature, a minor tweak, or a bug fix—is strictly isolated in a dedicated, temporary branch. Under this rule, developers never commit directly to the `main` branch. This guarantees that the primary codebase remains stable, clean, and deployable at all times, while giving developers a safe sandbox to experiment, make mistakes, and eventually submit their polished work for peer review.

{{"git reset --hard"}}
A destructive history-rewriting command that moves the **HEAD** pointer backward, and forcefully overwrites both the **Staging Area** and the **Working Directory** to perfectly match that older commit. Any uncommitted work or currently staged changes are permanently deleted.

```curated-resources
https://git-scm.com/docs/git-reset#Documentation/git-reset.txt---hard
https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
```

{{"Pull Request / Merge Request"}}
A feature of hosting platforms (GitHub/GitLab), not Git itself. It is a **request** to merge a branch into the main codebase, allowing for code review and discussion.

{{"Tag (Lightweight)"}}
A fixed, immutable **pointer** to a specific commit. Unlike a branch, it does not move. It acts as a "bookmark" for important moments like releases (v1.0).

{{"Tag Object (Annotated)"}}
A full Git object containing the tagger’s name, email, date, and message. It points to a commit and is stored in the database.

{{"git reset --soft"}}
A history-rewriting command that moves the **HEAD** pointer backward to a previous commit, but leaves your **Staging Area** and **Working Directory** completely untouched. It effectively "un-commits" your recent work, leaving all those changes already staged and ready to be grouped into a new commit.

```curated-resources
https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git/927386#927386
https://git-scm.com/docs/git-reset#Documentation/git-reset.txt---soft
https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified
```

{{"Branch"}}
A lightweight, movable **pointer** to a specific commit. As you make new commits while on a branch, this pointer automatically moves forward to track the latest work.

{{"Reflog"}}
A local, chronological log of where **HEAD** has pointed. It records every movement (commit, checkout, reset), allowing you to recover "lost" commits.

{{"Tracking Branch"}}
A local, read-only branch (like origin/main) that represents the **last known state** of a branch on the remote server. You cannot commit to it directly.

{{"git ls-files"}}
A low-level command to view the raw content of the **Index** (Staging Area).

{{"git cat-file"}}
A low-level command used to examine the type and content of Git objects directly from the database.

{{"git restore"}}
A modern command specifically designed to discard uncommitted changes in the **Working Directory** or **Staging Area**.

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

{{".git/FETCH_HEAD"}}
A short-lived, temporary reference file located exactly at `.git/FETCH_HEAD`. It acts as Git's short-term memory during network operations. Every time Git reaches out to a remote server to download data, it records the exact commit hashes and branch names of what it just downloaded inside this file. It exists almost entirely to facilitate the two-step process of a `git pull`.

{{"Merge Conflicts"}}
A state that occurs when Git cannot automatically reconcile differences between two commits (usually when the same line was edited differently).

{{"Detached HEAD"}}
A state where **HEAD** points directly to a Commit Hash instead of a Branch name. Commits made in this state are orphan and will be lost if you switch away without creating a branch.

{{"git merge --ff-only"}}
A strict way to combine history that **refuses** to create a merge commit. It only moves the branch pointer forward if the history is linear (a straight line).

{{"Relative Refs"}}
A syntax to refer to parents of a commit, such as HEAD~1 (grandparent) or HEAD^ (first parent). Essential for navigation during resets.

{{".gitignore"}}
A text file where you list patterns for files that Git should **ignore** (like build artifacts, logs, or OS files). These files will not appear in git status.

{{"Remote Repository"}}
A version of your project hosted on the internet or a network. It is the central hub for synchronization.

{{"Working Directory"}}
Also known as **Working Tree**, it's the actual folder on your computer where you can see, edit, and delete files. It is your "workbench" where you do your work before asking Git to track it.

One of the "Three Trees", others are the [Staging Area (Index)](<node:Staging Area (Index)>) and [HEAD](<node:HEAD>).

```curated-resources
https://youtu.be/BIjrKuJGTxw?si=bypPA-5KJ4F5oEq0&t=145
https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-workingtree
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#:~:text=Undoing%20Things.-,The%20Three%20States,-Pay%20attention%20now
https://www.youtube.com/watch?v=mAFoROnOfHs&t=377s
```

{{"Upstream Repository"}}
An Upstream Repository is the specific remote repository that your local branch considers its "parent" or "source of truth."

* It dictates the **flow of data**. It is the default place Git looks when you type `git pull` or `git push` without specifying a URL.  
* *Every Upstream is a Remote, but not every Remote is an Upstream.*

{{"git checkout / git switch"}}
Commands that update **HEAD** to point to a different branch or commit. switch is the modern, safer version strictly for changing branches, while checkout is the older, multi-purpose tool.

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


{{"git fetch"}}
Downloads new data (commits, files, refs) from a remote repository but **does not** integrate it into your working files. It updates your **Remote Tracking Branches**.

{{"Immutability"}}
Every object is identified by a 40-character SHA-1 hash derived directly from its content and a brief header. Because the identifier is a cryptographic hash of the data, any theoretical attempt to change the data would result in a completely different hash, thus creating a brand new object rather than modifying the existing one. This guarantees absolute integrity of historical states.
```curated-resources
https://youtu.be/lG90LZotrpo?si=-xdTzsdkl2izfZG4&t=562
https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
```


{{"Workflows (Git Flow/Trunk)"}}
High-level patterns for managing branches. **Git Flow** uses long-lived feature/release branches; **Trunk-Based** focuses on rapid integration into a single main branch.

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

{{"git stash"}}
Temporarily shelves (hides) your uncommitted changes so you can work on a clean directory. You can **pop** the changes back later.

{{"Staging Area"}}
The **conceptual workspace** where you craft your next commit. Unlike a simple "save" button, it allows you to pick and choose specific changes—even parts of a single file—to include in a snapshot while leaving unfinished work behind. It serves as a **draft** or **proposal** for the next commit.

{{"git rebase -i"}}
The **interactive** mode of rebase. It allows you to squash, edit, reorder, or drop specific commits in a list, essentially rewriting history.

{{"Staging Area (Index)"}}
The **intermediate zone** between your working directory and the repository. It acts as a "loading dock" where you review and prepare specific changes before permanently recording them in the history. It combines the conceptual workflow (**Staging Area**) with the technical implementation (**Index**).

One of the "Three Trees", others are the [Working Directory](<node:Working Directory>) and [HEAD](<node:HEAD>).

{{"Cache"}}
The **original name** for the Staging Area in early versions of Git. It refers to how the Index "caches" the file contents to speed up operations. While the term is largely obsolete in conversation, it survives in low-level command flags like git diff \--cached or git rm \--cached.

{{".git/index (Index)"}}
The **physical implementation** of the Staging Area. It is a single **binary file** located at .git/index that maintains a high-speed list of every file in your project, along with their permissions and checksums. When you run git add, you are updating this file; when you run git commit, Git creates the new snapshot exclusively from this list.

{{"git reflog"}}
The command used to **view** the Reflog content. It is your primary tool for recovering from a bad git reset.

{{"Local Repository"}}
The copy of the Git database and project history that resides physically on your personal computer. It acts as the counterpart to the Remote Repository during synchronization.

{{"main"}}
The default starting branch created when you initialize a new Git repository. Crucially, `main` is just a **community convention**, not a technical requirement. Git itself does not treat this branch any differently than a branch named `bugfix` or `testing`; it is simply a standard, movable pointer.

**Historical Note:** For over a decade, the default name hardcoded into Git and platforms like GitHub was **`master`**. Around 2020, the software industry widely shifted to **`main`** to use more inclusive language. You will still frequently encounter `master` in older tutorials, legacy repositories, and older versions of Git, but functionally, the two names behave exactly the same.



{{"Repository (.git)"}}
The hidden folder (named .git) inside your project. It is the database that stores all the snapshots, commits, and configuration settings. If you delete this folder, you lose the project's history.

{{"Upstream"}}
The link between a local branch and a remote branch. If main has origin/main as its upstream, git push knows where to send the code without arguments.

{{"DAG (Directed Acyclic Graph"}}
The mathematical structure of Git history. It means commits go in **one direction** (time), never loop back, and have clear parent-child relationships.

{{"Atomic Commits"}}
The practice of making commits that do **one thing** only. This makes history easier to read and allows for clean reverts.

{{"HEAD"}}
The special **pointer** that indicates "you are here." It typically points to a Branch name (attached state) and last commit, but can point directly to a Commit hash (detached state).

One of the "Three Trees", others are the [Staging Area (Index)](<node:Staging Area (Index)>) and [Working Directory](<node:Working Directory>).

{{"origin"}}
The standard, conventional shorthand name that Git automatically assigns to the primary remote server you cloned your project from. It is simply an alias for a URL, saving you from typing the full network address every time you want to sync your data.

{{"git push"}}
Uploads your local branch commits to a **Remote Repository**. It only works if your local history is up-to-date with the remote.k

{{".git/config"}}
The local configuration file for the repository. It stores project-specific settings, such as remote server URLs (like `origin`), branch tracking linkages, and user overrides that take precedence over global settings.

{{".git/HEAD"}}
A crucial text file that acts as the master pointer for your current working state. In normal operation, it contains a symbolic reference to your active branch (e.g., `ref: refs/heads/main`). In a detached state, it holds a raw commit hash.

{{".git/MERGE_HEAD"}}
A temporary **pseudoref** created automatically when a merge conflict occurs. It stores the hash of the incoming commit being merged, allowing Git to remember the target state while you manually resolve the conflicts in the Working Directory.

{{".git/objects"}}
The core, immutable database directory. It physically stores every Snapshot, metadata file, and raw file content (Commits, Trees, Blobs, and Tags), cryptographically organized by their SHA-1 hashes.

{{"Fast-Forward Merge"}}
The simplest and cleanest type of integration. If your active branch has not diverged from the target branch, Git doesn't create a new merge commit; it simply slides your branch pointer forward to exactly match the target.

{{"git branch -r"}}
An inspection command that lists all **Remote-Tracking Branches** cached in your local repository. It provides a read-only view of what branches currently exist on the remote servers you track.

{{"git branch"}}
A command that generates a new branch pointer at your current `HEAD` location. Importantly, it *does not* automatically switch you to that new branch; your Working Directory remains on the current branch.

{{"git checkout"}}
A navigation command that updates the `HEAD` pointer to the specified branch, and then overwrites your Index and Working Directory files to exactly match that branch's latest commit.

{{"git checkout [hash]"}}
A command used for "time travel." By targeting a specific commit hash instead of a branch name, it places your repository into a **Detached HEAD** state, allowing you to safely inspect or run old code without altering history.

{{"git merge"}}
An integration command that takes the history of a specified branch and fuses it into your currently active branch. Depending on the branch history, it will either perform a **Fast-Forward Merge** or forge a new, multi-parent "merge commit."

{{"git push -f"}}
Short for `--force`. A highly destructive command that forcefully overwrites the Remote Repository's timeline to perfectly match your local timeline, permanently discarding any upstream commits that you do not have locally.

{{"Local Config"}}
The repository-specific configuration scope. Settings applied here (stored in `.git/config`) strictly apply to the current project and will override any conflicting Global or System-level Git configurations.

{{"origin/main"}}
The most standard example of a **Remote-Tracking Branch**. It is a local, read-only bookmark that caches the last known location of the `main` branch on the remote server named `origin`.

{{"pseudoref"}}
Special, temporary reference pointers managed by Git (such as `MERGE_HEAD`, `FETCH_HEAD`, or `CHERRY_PICK_HEAD`). They are dynamically generated to track the mathematical state of multi-step, ongoing operations.

{{"refs/remotes/"}}
The hidden sub-directory inside `.git/refs/` where Git physically stores the pointer files for all **Remote-Tracking Branches**. This physical separation guarantees they never accidentally overwrite your local branches.

{{"Remote-Tracking Branch"}}
A local, read-only cache of a branch's state on a remote server. You cannot commit to these branches directly; they only move forward when you explicitly synchronize with the network using `git fetch` or `git pull`.

{{"Tree"}}
The conceptual representation of a directory (folder) within Git's architecture. It serves to group files together and can nest other directories within it to map out your file system.

{{"Tree Object"}}
The physical, immutable data structure stored in the `.git/objects` database representing a saved directory state. It explicitly lists file names, permissions, and the corresponding SHA-1 hashes of the Blobs and sub-Trees it contains.

{{"git branch -vv"}}
A highly detailed, "very verbose" inspection command. It lists all local branches alongside their configured Upstream tracking branches, explicitly showing exactly how many commits your local branch is ahead or behind the server.

{{"git push -u"}}
Short for `--set-upstream`. A command typically used on the very first push of a new branch. It uploads your branch to the server and simultaneously configures your local branch to track the remote one, enabling short-hand `git push` and `git pull` commands in the future.

{{"master"}}
The traditional default name for the primary timeline in a Git repository. While modern workflows and platforms have largely transitioned to using `main` as the default, functionally, it is simply a standard branch pointer with no special internal mechanics.

{{".git/config" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".git/HEAD" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".git/index (Index)" -"formerly known as"-> "Cache"}}
In the very early days of Git, the staging area was called the "Cache" because it cached the file contents before writing them to the database. You still see this legacy name in commands like `git diff --cached` (which does the same thing as `git diff --staged`).

{{".git/index (Index)" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".git/index (Index)" -"represents proposed"-> "Snapshot"}}
The Staging Area acts as a preview or a draft. Whatever is in the Staging Area right now is exactly what the Snapshot will look like if you run the commit command.

{{".git/objects" -"stored in"-> "Repository (.git)"}}
Coming soon..

{{".gitignore" -"filters"-> "git status"}}
Patterns in this file prevent Untracked Files from showing up in status.

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

{{"DAG (Directed Acyclic Graph" -"is composed of"-> "Commit Object"}}
The Directed Acyclic Graph is the structure formed by the parent linkages.

{{"git add" -"calculates the"-> "Blob Object"}}
Before anything is moved, Git performs a hash calculation. `git add` **calculates the SHA-1 hash** of the file’s current content to create a **Blob Object**. If the file's content has changed since the last add, a new unique hash is generated to represent that specific version of the data.

{{"git add" -"updates"-> "Staging Area (Index)"}}
This command takes the file as it looks right now in your workspace and copies that version into the draft space (Index), making it ready to be saved.

{{"git add" -"add Blob and file path in"-> "Staging Area (Index)"}}
Once the Blob is created, Git must remember which file it belongs to. git add **records the Blob's hash and the file's path** together within the **Staging Area (Index)**. This creates the link between the "untyped" data in the Blob and the actual filename used in your directory structure.

{{"git add" -"promotes changes from"-> "Working Directory"}}
When you run git add, you are **promoting changes** from your Working Directory (the files you see and edit) to the Staging Area. This signals to Git that these specific modifications are ready to be packaged into the next snapshot of the project.

{{"git branch -r" -"lists"-> "refs/remotes/"}}
The specific inspection command used to view all your Remote-Tracking Branches without showing local branches.

{{"git branch -vv" -"inspects"-> "Upstream Branch"}}
This specific flag (very verbose) lists all your local branches and explicitly prints the name of the upstream branch they are tethered to, if one exists.

{{"git branch" -"creates"-> "Branch"}}
Creates a new pointer to the current commit.

{{"git checkout" -"updates"-> "HEAD"}}
Moves the HEAD pointer to the specified branch.

{{"git checkout [hash]" -"triggers"-> "Detached HEAD"}}
Moving HEAD to a specific commit disconnects it from any branch.

{{"git clone" -"creates"-> "Remote Repository"}}
Sets up the 'origin' configuration pointing to the URL.

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

{{"git fetch" -"creates / updates"-> ".git/FETCH_HEAD"}}
Logs the exact commit hashes that were just downloaded. This is the crucial, hidden bridge file used by git pull.

{{"git fetch" -"updates"-> "origin/main"}}
Moves this specific tracking pointer forward to perfectly mirror the new state of the server.

{{"git fetch" -"downloads from"-> "Remote Repository"}}
Retrieves new commits and data from the remote server, but strictly stops there.

{{"git fetch" -"updates"-> "Tracking Branch"}}
Downloads data and moves 'origin/main' to match the server.

{{"git init" -"creates"-> "Repository (.git)"}}
Running this command physically generates the database folder on your computer. Before this, you just have files; after this, you have a Git project.

{{"git log" -"reads"-> "Commit Object"}}
This command opens the database and reads the metadata (author, date, message) from the saved commits to show you the project's history.

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

{{"git push -u" -"creates"-> "Upstream Branch"}}
The `-u` (or `--set-upstream`) flag is the explicit command used to push a new local branch to a server AND permanently establish the linkage for the future.

{{"git rebase" -"rewrites"-> "Commit Object"}}
Copies existing commits to a new base, generating new hashes.

{{"git rebase" -"updates"-> "Working Directory"}}
Like a merge, rebasing modifies the actual files on your hard drive so you can see the newly integrated code.

{{"git rebase" -"is alternative to"-> "git merge"}}
Both commands solve the problem of integrating branches, but rebase rewrites history for a linear graph, while merge preserves the true parallel history.

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

{{"HEAD" -"stored in"-> ".git/HEAD"}}
Coming soon..

{{"HEAD" -"points to"-> "Branch"}}
In a normal state, HEAD is a symbolic link to a branch name.

{{"HEAD" -"points to"-> "Commit Object"}}
In a detached state, HEAD points directly to a commit hash.

{{"Immutability" -"prevents editing of"-> "Blob Object"}}
The raw data inside a saved file cannot be altered. "Modifying" a file in Git actually creates a brand new Blob Object.

{{"Immutability" -"prevents editing of"-> "Commit Object"}}
Once a Commit Object is created, its hash is locked. "Editing" a commit mathematically requires creating a new one.

{{"Immutability" -"is enforced by"-> "SHA-1 Hash"}}
Because an object's ID is derived directly from its content, you mathematically cannot change the content without the ID changing. This calculation fundamentally enforces immutability.

{{"Immutability" -"prevents editing of"-> "Tag Object (Annotated)"}}
The historical record of a release (who tagged it, when, and the message) cannot be modified after creation.

{{"Immutability" -"prevents editing of"-> "Tree Object"}}
Once a directory structure is saved, its contents and file references are permanently locked.

{{"Local Config" -"stored in"-> ".git/config"}}
Coming soon..

{{"Local Repository" -"synonym"-> "Repository (.git)"}}
Conceptually, the "Local Repository" refers to the entire database sitting on your personal machine, distinguishing it from the shared server.

{{"main" -"historically known as"-> "master"}}
In older repositories and tutorials (pre-2020), the default starting branch was named `master`. Modern Git and hosting platforms now default to `main`.

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

{{"pull.ff" -"modifies behavior of"-> "git pull"}}


{{"pull.rebase" -"modifies behavior of"-> "git pull"}}


{{"Reflog" -"rescues from"-> "git reset"}}
If you accidentally perform a hard reset and "lose" a commit, you can find its hash in the Reflog and reset back to it.

{{"Reflog" -"records"-> "HEAD"}}
A log of every time the HEAD pointer moved or changed values.

{{"Reflog" -"tracks movement of"-> "HEAD"}}
It is a private, local journal that records exactly where HEAD was pointing at any given time, regardless of what happened to the branches.

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

{{"Tag (Lightweight)" -"points to"-> "Commit Object"}}
A simple static label for a specific commit.

{{"Tree" -"implemented by"-> "Tree Object"}}
Coming soon..

{{"Tree Object" -"references"-> "Blob Object"}}
Maps a filename to a Blob hash.

{{"Upstream Branch" -"links"-> "Branch"}}


{{"Upstream Branch" -"links"-> "Remote-Tracking Branch"}}


{{"Upstream Repository" -"source of truth of a"-> "Local Repository"}}


{{".git/FETCH_HEAD" -"is a"-> "pseudoref"}}


{{".git/MERGE_HEAD" -"is a"-> "pseudoref"}}


{{"❓ Pull vs Fetch" -"solved by"-> "git pull"}}


{{"Feature Branching" -"relies on"-> "Branch"}}
The entire methodology is built on Git's ability to create lightweight, disposable pointers for parallel development.

{{"Feature Branching" -"avoids"-> "Merge Conflicts"}}
(Or rather, delays and isolates them). It prevents developers from constantly stepping on each other's toes in the main branch on every single commit.

{{"Local Repository" -"synonym"-> "Repository (.git)"}}


{{"main" -"is a type of"-> "Tracking Branch"}}


{{"git remote" -"manages"-> "Remote Repository"}}
It provides the interface to list, add, remove, or rename the server connections that your local project is currently tracking.

