# 滑动窗口
什么是滑动窗口：
对一个序列（本题是一个字符串s）使用双指针left、right，初始化left = right = 0，把索引左闭右开的区间[left,right)称为一个窗口
（此处不适用双闭或双开是为了避免边界问题，左闭右开初始时区间[0,0)没有元素，让right向右移动一位区间[0,1)就包含元素0了）。

# 滑动窗口的心法（核心思想）
1. 初始化双指针left和right。【初始化】
2. 先不断增加right扩大窗口，直到窗口中的内容符合要求。【寻找可行解】
3. 停止增加right，不断增加left缩小窗口，直到窗口中的内容不再满足要求。在每次增加left时都要更新所求的结果。【优化可行解】
4. 不断重复扩大窗口、缩小窗口的操作，直到right到达序列的末端。


# 思考（也是考点）：
窗口使用什么数据结构
达到窗口限定后，左边届该怎样收缩，如果无法以常规方法收缩，考虑延时删除策略
怎样采集答案
滑窗的步长
滑窗的起始位置
是否需要数据预处理，例如排序，才能使用滑窗


1. **正数组arr 求K大小的子数组的平均值**
遍历arr，sum累加arr[i]，当**i>=K-1**时：可以得到**当前子数组的平均值windowSum/K**，此时sum减去前面的arr[start]并start++。

2. **正数组arr 求K大小的子数组的和最大值** O(N) O(1)
遍历arr，sum累加arr[i]，当**i>=K-1**时：**max取max和sum最大值**，此时sum减去前面的arr[start]并start++。

3. **正数组arr 找出总和>=S的最小连续子数组的长度** O(N) O(1)
遍历arr，sum累加arr[i]，当**sum>=s**时：**min取min和end-start+1最大值**，此时sum减去前面的arr[start]并start++。

4. **求不超过K个不同字符组成的 最长子字符串的长度** O(N) O(K)
遍历str，往charFrequency[str[i]]记录频次，while**charFrequency中key长度>k**时：charFrequency[str[start]]--，start++，若charFrequency[str[start]]为0则delete；**max取max和end-start+1最大值**。

5. **水果成两个篮子** O(N) O(1)
遍历fruits，往charFrequency[str[i]]记录频次，while**charFrequency中key长度>2**时：charFrequency[str[start]]--，start++，若charFrequency[str[start]]为0则delete；**max取max和end-start+1最大值**。

6. **求所有不同字符的最长子字符串的长度** O(N) O(1)
遍历str，如果str[i]不在charIndexMap中：start取start和charIndexMap[str[i]]+1的最大值；charIndexMap[str[i]]=i，max取max和end-start+1最大值。

7. **允许用任何字母替换不超过k个字母 求替换后相同字母最长子串的长度** O(N) O(1)
遍历str，往charFrequency[str[i]]记录频次，maxRepeatLetterCount取maxRepeatLetterCount和charFrequency[str[i]]最大值，当end-start+1-maxRepeatLetterCount>k时：charFrequency[str[start]]--，start++；**max取max和end-start+1最大值**。

8. **给定一个包含0和1的数组 允许用1替换不超过“k”个0 求全为1的最长连续子数组的长度** O(N) O(1)
遍历arr，当arr[i]为1时maxOnesCount++；当end-start+1-maxOnesCount>k时：当arr[start]为1时maxOnesCount++，start++；**max取max和end-start+1最大值**。

9. **找出str中是否包含pattern的任何排列** O(N+M) O(M)
遍历pattern向charFrequency记录字母频次；遍历str，若str[i]在charFrequency中：charFrequency[str[i]]--，当charFrequency[str[i]]为0则matched++；当matched=charFrequency中key长度时返回true；当i>=pattern.length-1时：若str[start]在charFrequency中：当charFrequency[str[start]]为0则matched--；charFrequency[str[start]]++；

10. **找出str中包含pattern的任何排列的index** O(N+M) O(M)
遍历pattern向charFrequency记录字母频次；遍历str....
