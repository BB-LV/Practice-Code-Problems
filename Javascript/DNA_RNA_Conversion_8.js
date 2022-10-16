/*
DNA To RNA Conversion 8kyu

Deoxyribonucleic acid, DNA is the primary information storage molecule in 
biological systems. It is composed of four nucleic acid bases Guanine ('G'), 
Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
RNA differs slightly from DNA its chemical structure and contains no Thymine. 
In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. 
All input is guaranteed to be valid, 
i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

This kata is giving us a string of four possible letters and asking us to return a string
consisting of four possible letters. Each letter in our return string must correspond
to a specific 'translation' from our input string. We can break our input string apart
with .split('') to make it easier to work with and than use a for loop to run through
the array and replace each index accordinly.
*/

function DNAtoRNA(dna) {
    dna = dna.split('');
    for(let i = 0; i < dna.length; i++){
      if(dna[i] == 'T'){
        dna[i] = 'U';
      }
    }
    return dna.join('');
  }