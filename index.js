
document.addEventListener('DOMContentLoaded', () => {
    // Get all radio buttons with the name 'option'
    const radioButtons = document.querySelectorAll('input[name="option"]');

    // Add change event listener to each radio button
    radioButtons.forEach(x => {
        x.addEventListener('change', handleRadioChange);
    });
    let ind=0;

    let arr1=["red","green","blue","yellow","white","black","orange"];
    let arr2=["1","2","3","4","5","6","7","8","9","0","A","b","C","D","E","F"];

    function fn1(){
        let x=Math.random();
        x=x*10;
        x=Math.floor(x);
        x=x%arr1.length;
        let y=document.querySelector('.back');
        y.style.backgroundColor = arr1[x];
        let str=document.querySelector('.color_code_2');
        str.textContent=arr1[x];
    }

    function fn2(){
        let str=document.querySelector('.color_code_2');
        str.textContent="#";
        for(let i=0;i<6;i++){
            let x=Math.random();
            x=x*100;
            x=Math.floor(x);
            x=x%arr2.length;
            str.textContent+=arr2[x];
        }
        let y=document.querySelector('.back');
        y.style.backgroundColor = str.textContent;
    }

    function fn3(){
        let str=document.querySelector('.color_code_2');
        str.textContent="rgba(";
        for(let i=0;i<3;i++){
            let x=Math.random();
            x=x*1000;
            x=Math.floor(x);
            x=x%255;
            str.textContent+=x;
            str.textContent+=',';
        }
        str.textContent+='.';
        let x=Math.random();
        x=x*10;
        x=Math.floor(x);
        str.textContent+=x;
        str.textContent+=')';
        let y=document.querySelector('.back');
        y.style.backgroundColor = str.textContent;
    }

    function fn(){
        if(ind==0)fn0();
        else if(ind==1)fn1();
        else if(ind==2)fn2();
        else fn3();
    }

    function fn0(){
        alert("Select a Color Type");
    }

    function handleRadioChange(event) {
        // Get all labels
        const labels = document.querySelectorAll('.radio-label');
        
        // Reset all labels to white
        labels.forEach(label => {
            label.classList.remove('blue');
            label.classList.add('white');
        });

        // Get the selected radio button
        const selectedRadio = event.target;
        
        const selectedLabel = selectedRadio.closest('label');//closest find the nearest parent with specified css selector
        selectedLabel.classList.remove('white');
        selectedLabel.classList.add('blue');

        let selectedValue =selectedRadio.value;
        
        if(selectedValue==1)ind=1;
        else if(selectedValue==2)ind=2;
        else ind=3;
    }

    let btn = document.querySelector('.btn');

    btn.addEventListener('click',fn);

});

document.querySelector('.copyButton').addEventListener('click', async function() {
    var textToCopy = document.querySelector('.color_code_2').textContent;

    try {
        await navigator.clipboard.writeText(textToCopy);
        console.log('Text copied to clipboard');
        this.textContent = 'Copied!';
        this.classList.add('copied');
        setTimeout(() => {
            this.textContent = '📋 Copy';
            this.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
});


