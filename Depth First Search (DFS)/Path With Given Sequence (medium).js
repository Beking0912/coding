/**
 * Given a binary tree and a number sequence,
 * find if the sequence is present as a root-to-leaf path in the given tree.
 * 
 * O(N) O(N)
 */
function find_path(root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }
  return find_path_recursive(root, sequence, 0);
}

function find_path_recursive(currentNode, sequence, sequenceIndex) {
  if (currentNode === null) {
    return false;
  }

  const seqLen = sequence.length;
  if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {
    return false;
  }

  if (currentNode.left === null && currentNode.right === null && sequenceIndex === seqLen - 1) {
    return true;
  }

  return find_path_recursive(currentNode.left, sequence, sequenceIndex + 1) ||
    find_path_recursive(currentNode.right, sequence, sequenceIndex + 1);
}
