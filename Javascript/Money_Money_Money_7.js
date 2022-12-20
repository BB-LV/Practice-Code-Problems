/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. 
After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' 
as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration 
that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

For this problem we can first check to make sure the principal is less than or equal to the 
desired amount, if not we can use two counting variables, the first representing the number
of years passing and the second representing the accumulated amount of money over the years.
Next we can run a for loop representing each year and run the equation asked to run, 
adding an accrued interest that's taxed each year.

lastly we can return the numer of years the for loop represented.

*/

function calculateYears(principal, interest, tax, desired) {
    if(principal >= desired){
      return 0;
    }else{
      let numYears = 0;
      let accAmount = principal;
      for(let i = 0; accAmount <= desired; i++){
          numYears++;
          const taxAmount = ((accAmount * interest) * tax).toFixed(2)
          accAmount = accAmount + ((accAmount * interest) - taxAmount);
      }
      return numYears;
    }
  }