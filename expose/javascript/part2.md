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

A.) '32', because 2 will map to '2'.

B.) 1, because '3' will map to 3, so 3 - 2 = 1

C.) 3, because null will map to 0 and 3 + 0 = 3.

D.) '3null', because null will map to 'null'.

E.) 4, because true gets mapped to 1, so 1 + 3 = 4.

F.) 0, because false gets mapped to 0 and null gets mapped to 0, so 0 + 0 = 0.

G.) '3undefined', because undefined gets mapped to 'undefined'.

H.) NaN, becausae undefined gets mapped to NaN, so the whole thing becomes NaN

14.)

A.) true, because '2' gets mapped to 2 and 2 > 1 is true.

B.) false, because '2' has a higher alphabet index than '12'.

C.) true, because '2' gets mapped to 2, so 2 == 2.

D.) false, because === does not convert the '2', so they both are different objects, thus false.

E.) false, because true gets mapped to 1 and 1 == 2 is false.

F.) true, because Boolean(2) maps to true, so true == true.

15.) == checks if the two sides are equal with type conversion. === checks if the two sides are equal without type conversion

17.) The function modifyArray is called with the parameters of an array and a callbackFunction. The function modifyArray iterates over the array input and pushes each element with the callbackFunction doSomething, which multiplies the element by 2. Since our input array is [1, 2, 3], if we multiply each element by 2, we will get [2, 4, 6].

19.) 1 4 3 2
