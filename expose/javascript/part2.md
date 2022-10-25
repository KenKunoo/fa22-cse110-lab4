1.) The console will print out 3. Since the prices array has length 3, the loop will iterate through the price array, meaning the for loop will have 3 iterations, allowing i = 3 after the three iterations. Since line 12 prints out i, which is 3, the console will print out 3.
2.) The console will only return the final iteration of discountedPrice. Since the input array is [100, 200, 300], the last element used is 300. If we follow the discountedPrice equation, it will be 300 * 0.5, which is 150. Then, the console will print out 150 at line 13.
3.) The console will only return the final iteration of finalPrice. Since the input array is [100, 200, 300], the last element used is 300. If we follow the finalPrice equation, it will be Math.round(150*100)/100, which is 150. Then, the console will print out 150 at line 14.
4.) The function will return the discounted version of the original prices array. If we follow through each iteration, each element is discounted by half. So, the function returns [50, 100, 150].
5.) The function will error because i is in a different block, thus out of scope. Line 12 cannot access i.
6.) The function will error, since discountedPrice is let and inside the for loop block, line 13 cannot access discountedPrice since it is outside of the for loop block, thus out of scope.
7.) Line 14 will print out 150, because let discounted is within the same function block as line 14, meaning line 14 will be able to access discounted even though it is declared as a let.
8.) The function will return the discounted version of the original prices array. If we follow through each iteration, each element is discounted by half. So, the function returns [50, 100, 150].
9.) The function will error because i is in a different block, thus out of scope. Line 11 cannot access i.
10.) Line 12 will output 3, the length of prices. Line 12 is able to access the const length, because it is in the same function block, thus in scope.
11.) The function will error because const discountedPrice is a const, which does not allow re-declaration, causing an error.
12.) 
A.) student.name
B.) student['Grad Year']
C.) student.greeting()
D.) student['Favorite Teacher'].name
E.) student.courseLoad[0]
13.)