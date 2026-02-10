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

{{"git add"}}
A command that moves changes from the Working Directory to the Staging Area. It tells Git, "I want this file to be part of the next snapshot."

{{"Staging Area\n(Index)"}}
The **intermediate zone** between your working directory and the repository. It acts as a "loading dock" where you review and prepare specific changes before permanently recording them in the history. It combines the conceptual workflow (**Staging Area**) with the technical implementation (**Index**).

{{"Working Directory"}}
The actual folder on your computer where you can see, edit, and delete files. It is your "workbench" where you do your work before asking Git to track it.

{{"Snapshot"}}
A complete record of what all the files in your project looked like at a specific moment in time. Unlike a backup, it is efficient and only stores files that have changed, reusing the ones that haven't.

{{"Staging Area"}}
The **conceptual workspace** where you craft your next commit. Unlike a simple "save" button, it allows you to pick and choose specific changes—even parts of a single file—to include in a snapshot while leaving unfinished work behind. It serves as a **draft** or **proposal** for the next commit.

{{"Cache"}}
The **original name** for the Staging Area in early versions of Git. It refers to how the Index "caches" the file contents to speed up operations. While the term is largely obsolete in conversation, it survives in low-level command flags like git diff \--cached or git rm \--cached.

{{".git/index (Index)"}}
The **physical implementation** of the Staging Area. It is a single **binary file** located at .git/index that maintains a high-speed list of every file in your project, along with their permissions and checksums. When you run git add, you are updating this file; when you run git commit, Git creates the new snapshot exclusively from this list.

{{"Commit Object"}}
A permanent record in the database. It wraps your Snapshot with metadata: who made the changes (author), when they were made (timestamp), why they were made (message), and a link to the previous commit (parent).

{{"Repository (.git)"}}
The hidden folder (named .git) inside your project. It is the database that stores all the snapshots, commits, and configuration settings. If you delete this folder, you lose the project's history.

{{"user.name"}}
A configuration setting that tells Git who you are. This name is "burned" into every commit you create, becoming a permanent part of the history.

{{"user.email"}}
A configuration setting that links your commits to an email address. This is used by services like GitHub to associate the code with your user profile.

{{"git init"}}
A command that transforms a regular folder into a Git Repository. It creates the hidden .git directory, setting up the database structures needed to start tracking changes.

{{"git commit"}}
A command that takes everything currently in the Staging Area and saves it permanently as a Commit Object in the Repository.

{{"git status"}}
A command that reports the current state of the Working Directory and Staging Area. It tells you which files are modified, which are staged for commit, and which are untracked.

{{"git log"}}
A command that lists the history of Commit Objects in reverse chronological order (newest first). It allows you to browse past snapshots and read their author messages.{{"git add" -"promotes changes from"-> "Working Directory"}}
When you run git add, you are **promoting changes** from your Working Directory (the files you see and edit) to the Staging Area. This signals to Git that these specific modifications are ready to be packaged into the next snapshot of the project.

{{"git add" -"updates"-> "Staging Area\n(Index)"}}
This command takes the file as it looks right now in your workspace and copies that version into the draft space (Index), making it ready to be saved.

{{"git add" -"calculates the"-> "Blob Object"}}
Before anything is moved, Git performs a hash calculation. `git add` **calculates the SHA-1 hash** of the file’s current content to create a **Blob Object**. If the file's content has changed since the last add, a new unique hash is generated to represent that specific version of the data.

{{"git add" -"add Blob and file path in"-> "Staging Area\n(Index)"}}
Once the Blob is created, Git must remember which file it belongs to. git add **records the Blob's hash and the file's path** together within the **Staging Area (Index)**. This creates the link between the "untyped" data in the Blob and the actual filename used in your directory structure.

{{".git/index (Index)" -"formerly known as"-> "Cache"}}
In the very early days of Git, the staging area was called the "Cache" because it cached the file contents before writing them to the database. You still see this legacy name in commands like `git diff --cached` (which does the same thing as `git diff --staged`).

{{"Staging Area" -"stored in"-> ".git/index (Index)"}}
This relationship connects the abstract concept to the physical reality. The Index is actually a single binary file located at `.git/index` on your hard drive, which contains the list of all tracked files and their checksums.

{{".git/index (Index)" -"represents proposed"-> "Snapshot"}}
The Staging Area acts as a preview or a draft. Whatever is in the Staging Area right now is exactly what the Snapshot will look like if you run the commit command.

{{"git init" -"creates"-> "Repository (.git)"}}
Running this command physically generates the database folder on your computer. Before this, you just have files; after this, you have a Git project.

{{"git commit" -"creates"-> "Commit Object"}}
This action freezes the current Staging Area into a permanent object in the database, generating a unique ID (hash) for it.

{{"Commit Object" -"contains"-> "Snapshot"}}
Every commit holds exactly one snapshot. The commit acts as the envelope (with the stamp and address), and the snapshot is the letter inside.

{{"Commit Object" -"requires"-> "user.name"}}
Git will not let you save a commit without an author name. It needs this to permanently sign the work.

{{"Commit Object" -"requires"-> "user.email"}}
Similar to the name, an email is mandatory metadata for every commit to ensure the history can be attributed to a real person.

{{"git status" -"inspects"-> "Working Directory"}}
This command looks at your workspace to see what is different compared to the last time you saved.

{{"git status" -"inspects"-> "Staging Area"}}
This command also checks the draft space to see what you have already queued up for the next save.

{{"git log" -"reads"-> "Commit Object"}}
This command opens the database and reads the metadata (author, date, message) from the saved commits to show you the project's history.

{{"Snapshot" -"is represented by"-> "Tree Object"}}


{{"Tree" -"implemented by"-> "Tree Object"}}


{{"Staging Area" -"concept of"-> "Staging Area\n(Index)"}}


{{"Commit Object" -"contains"-> "Tree Object"}}


{{"Repository (.git)" -"stored in"-> "Working Directory"}}
The database lives physically inside the root of your project folder (hidden by default), ensuring the history travels with the files.

{{"Commit Object" -"stored in"-> ".git/objects"}}
Every saved snapshot is compressed, hashed, and physically stored inside the `.git/objects` subfolder of the repository.

{{"Local Config" -"stored in"-> ".git/config"}}


{{"HEAD" -"stored in"-> ".git/HEAD"}}


{{".git/HEAD" -"stored in"-> "Repository (.git)"}}


{{".git/config" -"stored in"-> "Repository (.git)"}}


{{".git/objects" -"stored in"-> "Repository (.git)"}}


{{".git/index (Index)" -"stored in"-> "Repository (.git)"}}
