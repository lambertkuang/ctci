import test from 'ava';
import chapter1 from '../problems/ctci_ch1';


test('uniqueChars returns false on strings with repeated characters only at the end', (t) => {
  t.false(chapter1.uniqueChars('abcdeff'));
  t.false(chapter1.uniqueCharsNoDS('abcdeff'));
});

test('uniqueChars returns true on strings with all unique characters', (t) => {
  t.true(chapter1.uniqueChars('abcdefg'));
  t.true(chapter1.uniqueCharsNoDS('abcdefg'));
});

test('uniqueChars returns false on short strings with only repeated chars', (t) => {
  t.false(chapter1.uniqueChars('bb'));
  t.false(chapter1.uniqueCharsNoDS('bb'));
});

test('uniqueChars returns false on short strings with only repeated chars', (t) => {
  t.false(chapter1.uniqueChars('aertyuiopbb'));
  t.false(chapter1.uniqueCharsNoDS('aertyuiopbb'));
});

test('uniqueChars returns true on short strings with no repeated chars', (t) => {
  t.true(chapter1.uniqueChars('ab'));
  t.true(chapter1.uniqueCharsNoDS('ab'));
});

test('uniqueChars returns true on strings with only one character', (t) => {
  t.true(chapter1.uniqueChars('a'));
  t.true(chapter1.uniqueCharsNoDS('a'));
});

test('reverseCString returns a reversed C String with the null character', (t) => {
  t.is(chapter1.reverseCString('abc\0'), '\0cba');
});

test('reverseCString returns a reversed C String with the same length as the original', (t) => {
  t.is(chapter1.reverseCString('a\0').length, 2);
});

test('reverseCString returns a string of length 1 for an empty string', (t) => {
  t.is(chapter1.reverseCString('\0').length, 1);
});

test('reverseCString returns the same string for an empty string', (t) => {
  t.is(chapter1.reverseCString('\0'), '\0');
});

test('removeDupeChars removes duplicate characters from a string', (t) => {
  t.is(chapter1.removeDupeChars('abcdefb'), 'abcdef');
});

test('removeDupeChars removes duplicate characters from a short string', (t) => {
  t.is(chapter1.removeDupeChars('aa'), 'a');
});

test('removeDupeChars removes duplicate characters from a long string', (t) => {
  t.is(chapter1.removeDupeChars('aaaaaaaaaaaaaaaa'), 'a');
});

test('removeDupeChars removes duplicate characters from a string with continuous duplicates', (t) => {
  t.is(chapter1.removeDupeChars('aaabbb'), 'ab');
});

test('removeDupeChars removes duplicate characters from a string with non-contiguous duplicates', (t) => {
  t.is(chapter1.removeDupeChars('abababa'), 'ab');
});

test('areAnagrams returns true for two strings which are anagrams', (t) => {
  t.is(chapter1.areAnagrams('iceman', 'cinema'), true);
});

test('areAnagrams returns false for two strings which are not anagrams', (t) => {
  t.is(chapter1.areAnagrams('icemana', 'cinema'), false);
});

test('areAnagrams returns false for two strings which are not anagrams', (t) => {
  t.is(chapter1.areAnagrams('b', 'a'), false);
});

test('areAnagrams returns true for two strings which are anagrams', (t) => {
  t.is(chapter1.areAnagrams('b', 'b'), true);
});

test('areAnagramsBySort returns true for two strings which are anagrams', (t) => {
  t.is(chapter1.areAnagrams('iceman', 'cinema'), true);
});

test('areAnagramsBySort returns false for two strings which are not anagrams', (t) => {
  t.is(chapter1.areAnagrams('icemana', 'cinema'), false);
});

test('areAnagramsBySort returns false for two strings which are not anagrams', (t) => {
  t.is(chapter1.areAnagrams('b', 'a'), false);
});

test('areAnagramsBySort returns true for two strings which are anagrams', (t) => {
  t.is(chapter1.areAnagrams('b', 'b'), true);
});