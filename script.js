const openTab = (event, tabId) => {
    let tabContent, tabLinks;

    tabContent = document.querySelectorAll('.tabcontent');
    tabContent.forEach((element) => {
        element.style.display = 'none'
    })

    tabLinks = document.querySelectorAll('.tablink');
    tabLinks.forEach((element) => {
        element.className = element.className.replace(' active', '')
    })


    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();
