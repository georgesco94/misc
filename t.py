def lengthOfLongestSubstring(s: str) -> int:
        if len(s) == 0:return 0
        if len(s) == 1:return 1

        lcs = 1
        start = 0
        end = 1
        seen_chars = set()
        while end < len(s):
            i = s[start]
            j = s[end]
            if i == j:
                start += 1
                end += 1
                continue
            print('looking at characters: {}::{}'.format(i , j))
            print('start and end are {} {}'.format(start, end))
            print('current longest is: ', lcs)
            if j in seen_chars:
                seen = False
                while not seen and start <= end:
                    if s[start] == j: seen = True
                    print('deleting, ', s[start])
                    seen_chars.remove(s[start])
                    start += 1
                print('Seeing repeat and shifting')
            seen_chars.add(i)
            seen_chars.add(j)
            if (end - start)+1 > lcs:
                lcs = (end - start)+1

            end += 1
            print('===================')

        return lcs



print(lengthOfLongestSubstring(" 1- r4 hy6h e gyt ber bsb"))
