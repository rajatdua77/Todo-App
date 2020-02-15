
const addToStorage = item =>{
    let todos = [];
    if(localStorage.getItem('todos')){
        let pastTodos = JSON.parse(localStorage.getItem('todos'))
        pastTodos.map(todo=>todos.push(todo))
    }

    todos.push(item)
    localStorage.setItem('todos',JSON.stringify(todos));

}

const start = () => {
    if(localStorage.getItem('todos')){
        const todos = JSON.parse(localStorage.getItem('todos'))
todos.map(todo=>{

    const ol=document.getElementById('list');
    var textnode=document.createTextNode(todo);
    const li=document.createElement('li');

    //create checkbox
    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check');

    //create label
    var label=document.createElement('label');
    label.setAttribute('for','item');
    //add  these elements on web page
      ol.appendChild(label);
      li.appendChild(checkbox);
      label.appendChild(textnode);
      li.appendChild(label);
      ol.insertBefore(li,ol.childNodes[0]);

      setTimeout(() =>{
              li.className='mycheck';
      },2);
})
    }
}


start()
var Addbutton=document.getElementById('add');
Addbutton.addEventListener('click',addItem);

var Removebutton=document.getElementById('remove');
Removebutton.addEventListener('click',removeItem);

var Cleanbutton=document.
getElementById('clean');
Cleanbutton.addEventListener('click',cleanItem);
  
var ol=document.getElementById('list');
var li;
var checkbox;

function addItem()
{
    var input=document.getElementById('input');
    var item=input.value;
    ol=document.getElementById('list');
    var textnode=document.createTextNode(item);

    if(item==='')
    {
        return false;
    }
    else{
        //create li
        li=document.createElement('li');

        //create checkbox
        checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');

        //create label
        var label=document.createElement('label');
        label.setAttribute('for','item');
        //add  these elements on web page
          ol.appendChild(label);
          li.appendChild(checkbox);
          label.appendChild(textnode);
          li.appendChild(label);
          ol.insertBefore(li,ol.childNodes[0]);

          setTimeout(() =>{
                  li.className='mycheck';
          },2);
          input.value='';

          addToStorage(item);


    }
}
function removeItem()
{
    li=ol.children;
   for(let i=0;i<li.length;i++)
   {
       while(li[i] && li[i].children[0].checked)
       {
           ol.removeChild(li[i])
       }
     //  const element=li[i];
   }
}
function cleanItem()
{
    li=ol.children;
   for(let i=0;i<li.length;i++)
   {
       while(li[i] && li[i].children[0])
       {
           ol.removeChild(li[i])
       }
     //  const element=li[i];
   }
   localStorage.clear()
}