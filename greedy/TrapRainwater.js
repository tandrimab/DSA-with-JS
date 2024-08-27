function trap(height) {
    let maxArea = Number.MIN_SAFE_INTEGER;
     let i = 0, j=height.length - 1;
     while (i < j) {
        let minIndex = height[i] < height[j] ? i : j;
        let area = (j - i) * height[minIndex];
        maxArea = Math.max(maxArea, area);
        if (minIndex ===i) {
            i++;
        } else {
            j--;
        }
     }
    return maxArea;
}

console.log(trap([1,0,0,0,0,0,0,2,2]));