let elDiv = document.querySelector('.tryme');
elDiv.addEventListener('mouseover', () => {
    console.log('I`m_here!');
    let a = elDiv.innerHTML;
    elDiv.innerHTML = 'А собака то злая и кусючая';
})
elDiv.addEventListener('mouseout', () => {
    console.log('I`m_Left');
    a = elDiv.innerHTML;
    elDiv.innerHTML = 'Собака на сене';
})