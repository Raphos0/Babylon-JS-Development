let x: number = 0;
let count20: number = 20;
let count15: number = 15;
let total15: number = 0;
let list: string = "";

function countingNum()
{
    x = 0;
    list = "";

    for (let i = 0; i < count20; i++) 
    {
        x++;
        
        if (i != 19)
        {list = list + x.toString() + ", ";}
        else
        {list = list + x.toString();}

        console.log(list);
        (document.getElementById("counting20") as HTMLFormElement).innerHTML = list;
    }
}

function sumOfNum()
{
    x = 0;
    list = "";

    for (let i = 0; i < count15; i++) 
    {
        x++;
        total15 += x;
        
        if (i != count15 - 1)
        {list = list + x.toString() + " + ";}
        else
        {list = list + x.toString();}

        console.log(list);
        console.log(total15);
        (document.getElementById("sum15") as HTMLFormElement).innerHTML = list;
        (document.getElementById("total15") as HTMLFormElement).innerHTML = total15.toString();
    }
}