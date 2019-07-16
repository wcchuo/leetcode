// 929. Unique Email Addresses
// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

// Example 1:
// Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

// Note:
// 1 <= emails[i].length <= 100
// 1 <= emails.length <= 100
// Each emails[i] contains exactly one '@' character.
// All local and domain names are non-empty.
// Local names do not start with a '+' character.

var numUniqueEmails = function(emails) {
  var unique = {}                                                         // setup an object to store all unique email addresses
  var len = emails.length - 1                                             // get the array length of all emails
  var i = 0                                                               // setup index for while loop
  while(i <= len){
    var arr = emails[i].split('@')                                        // split the address into an array: name (element 0) and domain (element 1)
    unique[arr[0].replace(/\./g,'').split('+')[0] + '@' + arr[1]] = true  // create the object key by replacing all '.' (dots) inside name, and ignore any string after '+' string, then join it with '@' string and domain string (element 1 inside arr array)
    i++                                                                   // increase index
  }
  return Object.keys(unique).length                                       // return the object key length
};

var emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

numUniqueEmails(emails)