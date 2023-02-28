
//The function summons the entities 
function newImage(url,left,bottom ){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
//this function summons interactble items 
function newItem(url,left,bottom){
    let object = newImage(url, left, bottom) 

    object.addEventListener('dblclick', () => {
        object.remove()
        itemUp.play()
        
    })
}
//Function make sounds into code
function itemSound(url) {
    let object = document.createElement('audio')
    object.src = url
    return object
}

//world assets
//this one for background entities
newImage('assets/green-character.gif', 100, 100 );
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300 );
newImage('assets/pillar.png', 350, 100 );
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

//interactble items
newItem('assets/sword.png', 500, 405);
newItem('assets/sheild.png' ,165,185);
newItem('assets/staff.png', 600, 100);

//sound calling in
let itemUp = itemSound('assets/cloth-inventory.wav')