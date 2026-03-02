{{"❓ Undo last commits"}}
Assuming you have already pushed these commits to a remote server in a branch others are working on, check the following node for a solution:

[git revert](<node:git revert>)

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

{{"Immutability"}}
Every object is identified by a 40-character SHA-1 hash derived directly from its content and a brief header. Because the identifier is a cryptographic hash of the data, any theoretical attempt to change the data would result in a completely different hash, thus creating a brand new object rather than modifying the existing one. This guarantees absolute integrity of historical states.
```curated-resources
https://youtu.be/lG90LZotrpo?si=-xdTzsdkl2izfZG4&t=562
https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
```
