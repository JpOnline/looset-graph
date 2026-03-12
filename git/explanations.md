{{".git/config"}}
Coming soon..

{{".git/HEAD"}}
Coming soon..

{{".git/index (Index)"}}
The **physical implementation** of the Staging Area. It is a single **binary file** located at .git/index that maintains a high-speed list of every file in your project, along with their permissions and checksums. When you run git add, you are updating this file; when you run git commit, Git creates the new snapshot exclusively from this list.

{{".git/objects"}}
Coming soon..

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


{{"DAG (Directed Acyclic Graph"}}
The mathematical structure of Git history. It means commits go in **one direction** (time), never loop back, and have clear parent-child relationships.

{{"Detached HEAD"}}
A state where **HEAD** points directly to a Commit Hash instead of a Branch name. Commits made in this state are orphan and will be lost if you switch away without creating a branch.

{{"git add"}}
A command that moves changes from the Working Directory to the Staging Area. It tells Git, "I want this file to be part of the next snapshot."

{{"git bisect"}}
A binary search tool that helps you find the specific commit that introduced a bug by asking you to mark versions as "good" or "bad."

{{"git blame"}}
A command that annotates every line of a file with the commit information (author, date, hash) that last modified it.

{{"git branch"}}
A command used to list, create, or delete branches. It manages the **pointers** to commits but does not switch your working directory to them.

{{"git branch [name]"}}
Coming soon..

{{"git cat-file"}}
A low-level command used to examine the type and content of Git objects directly from the database.

{{"git checkout [branch]"}}
Coming soon..

{{"git checkout [hash]"}}
Coming soon..

{{"git checkout / git switch"}}
Commands that update **HEAD** to point to a different branch or commit. switch is the modern, safer version strictly for changing branches, while checkout is the older, multi-purpose tool.

{{"git cherry-pick"}}
A command that takes the changes introduced by a specific commit (from anywhere in the graph) and applies them as a **new commit** on your current branch.

{{"git clone"}}
A command that downloads a copy of an existing **Remote Repository** to your local machine, setting up the connection (remote) named origin automatically.

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
A command that compares two **states** (e.g., Working Directory vs. Staging Area, or Branch A vs. Branch B) and outputs the line-by-line differences.

{{"git fetch"}}
Downloads new data (commits, files, refs) from a remote repository but **does not** integrate it into your working files. It updates your **Remote Tracking Branches**.

{{"git init"}}
A command that transforms a regular folder into a Git Repository. It creates the hidden .git directory, setting up the database structures needed to start tracking changes.

{{"git log"}}
A command that lists the history of Commit Objects in reverse chronological order (newest first). It allows you to browse past snapshots and read their author messages.

{{"git ls-files"}}
A low-level command to view the raw content of the **Index** (Staging Area).

{{"git merge --ff-only"}}
A strict way to combine history that **refuses** to create a merge commit. It only moves the branch pointer forward if the history is linear (a straight line).

{{"git pull"}}
A convenience command that runs git fetch followed immediately by git merge. It updates your current branch with changes from the remote.

{{"git push"}}
Uploads your local branch commits to a **Remote Repository**. It only works if your local history is up-to-date with the remote.

{{"git rebase"}}
Coming soon..

{{"git rebase -i"}}
The **interactive** mode of rebase. It allows you to squash, edit, reorder, or drop specific commits in a list, essentially rewriting history.

{{"git reflog"}}
The command used to **view** the Reflog content. It is your primary tool for recovering from a bad git reset.

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

{{"HEAD"}}
The special **pointer** that indicates "you are here." It typically points to a Branch name (attached state) and last commit, but can point directly to a Commit hash (detached state).

One of the "Three Trees", others are the [Staging Area (Index)](<node:Staging Area (Index)>) and [Working Directory](<node:Working Directory>).

{{"Immutability"}}
Every object is identified by a 40-character SHA-1 hash derived directly from its content and a brief header. Because the identifier is a cryptographic hash of the data, any theoretical attempt to change the data would result in a completely different hash, thus creating a brand new object rather than modifying the existing one. This guarantees absolute integrity of historical states.
```curated-resources
https://youtu.be/lG90LZotrpo?si=-xdTzsdkl2izfZG4&t=562
https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
```


{{"Local Config"}}
Coming soon..

{{"Merge Conflicts"}}
A state that occurs when Git cannot automatically reconcile differences between two commits (usually when the same line was edited differently).

{{"Packfile"}}
A compressed file that stores many Git objects together. It uses delta compression (storing differences) to save disk space.

{{"Pull Request / Merge Request"}}
A feature of hosting platforms (GitHub/GitLab), not Git itself. It is a **request** to merge a branch into the main codebase, allowing for code review and discussion.

{{"Reflog"}}
A local, chronological log of where **HEAD** has pointed. It records every movement (commit, checkout, reset), allowing you to recover "lost" commits.

{{"Relative Refs"}}
A syntax to refer to parents of a commit, such as HEAD~1 (grandparent) or HEAD^ (first parent). Essential for navigation during resets.

{{"Remote Repository"}}
A version of your project hosted on the internet or a network. It is the central hub for synchronization.

{{"Repository (.git)"}}
The hidden folder (named .git) inside your project. It is the database that stores all the snapshots, commits, and configuration settings. If you delete this folder, you lose the project's history.

{{"Snapshot"}}
A complete record of what all the files in your project looked like at a specific moment in time. Unlike a backup, it is efficient and only stores files that have changed, reusing the ones that haven't.

{{"Staging Area"}}
The **conceptual workspace** where you craft your next commit. Unlike a simple "save" button, it allows you to pick and choose specific changes—even parts of a single file—to include in a snapshot while leaving unfinished work behind. It serves as a **draft** or **proposal** for the next commit.

{{"Staging Area (Index)"}}
The **intermediate zone** between your working directory and the repository. It acts as a "loading dock" where you review and prepare specific changes before permanently recording them in the history. It combines the conceptual workflow (**Staging Area**) with the technical implementation (**Index**).

One of the "Three Trees", others are the [Working Directory](<node:Working Directory>) and [HEAD](<node:HEAD>).

{{"Tag (Lightweight)"}}
A fixed, immutable **pointer** to a specific commit. Unlike a branch, it does not move. It acts as a "bookmark" for important moments like releases (v1.0).

{{"Tag Object (Annotated)"}}
A full Git object containing the tagger’s name, email, date, and message. It points to a commit and is stored in the database.

{{"Tracking Branch"}}
A local, read-only branch (like origin/main) that represents the **last known state** of a branch on the remote server. You cannot commit to it directly.

{{"Tree"}}
Coming soon..

{{"Tree Object"}}
Coming soon..

{{"Upstream"}}
The link between a local branch and a remote branch. If main has origin/main as its upstream, git push knows where to send the code without arguments.

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

{{"Commit Object v2"}}
Posso usar esse tipo de Node pra abstrair relações..

{{"Local Repository"}}
The copy of the Git database and project history that resides physically on your personal computer. It acts as the counterpart to the Remote Repository during synchronization.

{{"SHA-1 Hash"}}
A 40-character cryptographic string generated from the contents of a file or commit. It acts as the permanent, mathematically unique ID for every Object in the Git database.

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

{{"❓ Undo last commits" -"solved by"-> "git revert"}}
Assuming you have already pushed these commits to a remote server in a branch others are working on, check the following node for a solution:

[git revert](<node:git revert>)

{{"❓ Undo last commits" -"solved by"-> "git reset"}}
If the history can be changed, check the following node for a solution:

[git reset](<node:git reset>)

{{"❓ Undo last commits" -"solved by"-> "git push -f"}}
If the commit you want to change is already pushed, but rewriting history is safe, then check the following node for a solution:

[git push -f](<node:git push -f>)

{{"❓ Undo last commits" -"solved by"-> "git commit --amend"}}
If you just want to include more changes into the last commit, check the following node for a solution:

[git commit --amend](<node:git commit --amend>)

{{"❓ Undo last commits" -"solved by"-> "git reset --soft"}}
If you want to undo the commit and keeep the changes in your index, check the following node for a solution:

[git reset --soft](<node:git reset --soft>)

{{"❓ Undo last commits" -"solved by"-> "git reset --hard"}}
To undo the commit and permanently delete commit's changes, check the following node for a solution:

[git reset --hard](<node:git reset --hard>)

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

{{"git branch [name]" -"creates"-> "Branch"}}
Creates a new pointer to the current commit.

{{"git checkout [branch]" -"updates"-> "HEAD"}}
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

{{"git fetch" -"updates"-> "Tracking Branch"}}
Downloads data and moves 'origin/main' to match the server.

{{"git init" -"creates"-> "Repository (.git)"}}
Running this command physically generates the database folder on your computer. Before this, you just have files; after this, you have a Git project.

{{"git log" -"reads"-> "Commit Object"}}
This command opens the database and reads the metadata (author, date, message) from the saved commits to show you the project's history.

{{"git merge" -"resolves via"-> "Merge Conflicts"}}
If automatic merging fails, the user must manually resolve the overlapping edits.

{{"git push" -"updates"-> "Remote Repository"}}
Sends local commits to the server, updating the remote reference.

{{"git rebase" -"rewrites"-> "Commit Object"}}
Copies existing commits to a new base, generating new hashes.

{{"git reset" -"moves"-> "HEAD"}}
The primary function of reset is to pick up the HEAD pointer (and the branch it's attached to) and drop it onto an older commit.

{{"git reset" -"uses"-> "Relative Refs"}}
You almost always combine these, telling Git to move the pointer relative to where you currently are (e.g., `git reset HEAD~2`).

{{"git reset" -"clears"-> "Staging Area (Index)"}}
The default mode (--mixed) will wipe the staging area to make it perfectly match the target commit.

{{"git reset --hard" -"overwrites"-> "Working Directory"}}
Destructively resets files to match the target commit, discarding work.

{{"git reset --hard" -"clears"-> "Staging Area (Index)"}}
In addition to destroying uncommitted work in your Working Directory, it violently wipes the Staging Area so it perfectly matches the older target commit.

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

{{"Merge Conflicts" -"occur in"-> "Staging Area"}}
During a conflict, the index holds 3 versions of the file (Base, Yours, Theirs).

{{"Packfile" -"compresses"-> "Blob Object"}}
Stores objects efficiently using deltas to minimize disk usage.

{{"Reflog" -"rescues from"-> "git reset"}}
If you accidentally perform a hard reset and "lose" a commit, you can find its hash in the Reflog and reset back to it.

{{"Reflog" -"records"-> "HEAD"}}
A log of every time the HEAD pointer moved or changed values.

{{"Reflog" -"tracks movement of"-> "HEAD"}}
It is a private, local journal that records exactly where HEAD was pointing at any given time, regardless of what happened to the branches.

{{"Relative Refs" -"navigates to"-> "Commit Object"}}
Symbols like `HEAD~1` or `HEAD^` allow you to target specific ancestor commits without needing to look up their exact SHA-1 hashes.

{{"Remote Repository" -"syncs with"-> "Local Repository"}}
The remote is a network counterpart to your local database. Commands like push and fetch move Commit Objects between these two locations.

{{"Remote Repository" -"contains"-> "Tracking Branch"}}
The server has its own branches which we track locally as read-only refs.

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

{{"git reset --hard" -"is a variant of"-> "git reset"}}


{{"git reset --soft" -"is a variant of"-> "git reset"}}


{{"git commit --amend" -"consumes"-> "Staging Area (Index)"}}
The command actively looks at your draft space. Any files you have newly staged will be permanently baked into the replacement commit alongside the original files.

{{"git commit --amend" -"respects"-> "Immutability"}}
Even though it feels like you are editing a save file, the command strictly obeys Git's read-only database rules by leaving the original object structure intact and building a completely new one.

