function countParagraphs() {
    const paragraphs = document.getElementsByTagName('p');
    document.getElementById('output1').innerText = `There are ${paragraphs.length} paragraph tags on this page.`;
}

function countSection1Elements() {
    const section1Elements = document.getElementById('section1').children;
    document.getElementById('output2').innerText = `There are ${section1Elements.length} elements inside section 1.`;
}

// Count and display the number of elements inside the second ID (section2)
function countSection2Elements() {
    const section2Elements = document.getElementById('section2').children;
    document.getElementById('output3').innerText = `There are ${section2Elements.length} elements inside section 2.`;
}