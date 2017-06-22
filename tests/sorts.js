import test from 'ava';
import sorts from '../sorts';

test('bubbleSort sorts an unsorted array', (t) => {
  t.deepEqual(sorts.bubbleSort([5,4,3,2,1]), [1,2,3,4,5]);
});