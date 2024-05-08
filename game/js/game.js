var bg = document.getElementsByClassName("bg")[0]
var player = document.getElementById('player')
var sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve,time))
}

var width = parseFloat(window.getComputedStyle(bg).getPropertyValue('width'))
var height = parseFloat(window.getComputedStyle(bg).getPropertyValue('height'))
var X = width / 2 , Y = height*0.9;
var over = false

bg.addEventListener("mousemove", (event) => {
    if (isGameActive === false) return
    const bgRect = bg.getBoundingClientRect(); // 获取.bg元素的边界信息
    X = event.clientX - bgRect.left - player.offsetWidth / 2; // 调整X坐标，考虑到.bg的位置和player宽度的一半
    Y = event.clientY - bgRect.top - player.offsetHeight / 2; // 调整Y坐标，考虑到.bg的位置和player高度的一半

    const maxX = bgRect.width - player.offsetWidth;
    const maxY = bgRect.height - player.offsetHeight;
    const adjustedX = Math.min(Math.max(0, X), maxX); // 限制X在0到maxX之间
    const adjustedY = Math.min(Math.max(0, Y), maxY); // 限制Y在0到maxY之间
    if (isGameActive === true && isPause === false) {
        player.style.left = `${adjustedX}px`;
        player.style.top = `${adjustedY}px`;
        bg.style.cursor = 'none'
    }

    else {bg.style.cursor = 'pointer'}
});

var isPause = false
var reback = null
var isGameActive = false
var isMusic = true
var isEasy = false
var isNormal = false

async function main(){
    let count = 0
    let i = 0
    let arr = []
    let row = []
    let id = 0
    player.innerHTML = '<img src="./images/player.png" style="width: 50px; height: 50px;">'

    while(true) {
        
        if (count >= arrtime) {
            count =0
            id++
            arr.push({"ID":id, "Obj":null , "x":Math.random() * (width-10) , "y":0 , "dx":Math.random() * 5 - 5 , "dy":Math.random() * 5 - 5})
        }

        if (i >= rowtime) {
            i = 0
            row.push({"Obj":null , "x":X + (player.offsetWidth / 2) , "y":Y ,"dy":-20})
        }
        
        for (let each of arr) {

            if(each.x >= width-20 || each.x < 0) {
                each.dx = -each.dx
            }
    
            if(each.y >= height-80 || each.y < -25) {
                each.dy = -each.dy
            }
    
            each.x += each.dx
            each.y += each.dy
    
            if(each.Obj === null) {
                var obstacle = document.createElement('div')
                obstacle.className = 'obstacle'
                var img = document.createElement('img')
                img.className = 'obstacleImg'
                img.src = './images/cxk.gif'
                img.width = 80
                img.height = 80
                obstacle.appendChild(img)
                bg.appendChild(obstacle)
                each.Obj = obstacle
            }
    
            each.Obj.style.left = `${each.x}px`
            each.Obj.style.top = `${each.y}px`
    
            // const obstacleX = each.x + 10
            // const obstacleY = each.y + 10
            // const playerX = X + 10
            // const playerY = Y + 10
    
            // if (Math.abs(obstacleX-playerX) <= 10 && Math.abs(obstacleY-playerY) <= 10 ) {
            //     over = true
            //     break
            // }
    
            const obstacleRect = each.Obj.getBoundingClientRect();
            const playerRect = player.getBoundingClientRect();
    
            if (!(playerRect.right < obstacleRect.left || playerRect.left + 5 > obstacleRect.right || playerRect.bottom - 20 < obstacleRect.top || playerRect.top + 10 > obstacleRect.bottom)) {
                var boomImg = each.Obj.querySelector('.obstacleImg')
                boomImg.src = "./images/boom1.png"
                player.innerHTML = '<img src="./images/boom1.png" style="width: 100px; height: 100px;">'
                over = true;
                break;
            }
    
        }

        for(let element of row) {
            element.y += element.dy

            if(element.Obj === null) {
                var rows = document.createElement('div')
                rows.className = 'rows'
                rows.innerHTML = '<svg t="1712922409208" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5242" width="15" height="15"><path d="M508.4 514m-428.6 0a428.6 428.6 0 1 0 857.2 0 428.6 428.6 0 1 0-857.2 0Z" fill="#F69802" p-id="5243"></path><path d="M508.4 962.5c-60.6 0-119.3-11.9-174.6-35.3-53.4-22.6-101.4-54.9-142.6-96.1C150 790 117.7 742 95.1 688.6 71.7 633.3 59.8 574.5 59.8 514s11.9-119.3 35.3-174.6C117.7 286 150 238 191.2 196.8s89.2-73.5 142.6-96.1c55.3-23.4 114.1-35.3 174.6-35.3 60.6 0 119.3 11.9 174.6 35.3 53.4 22.6 101.4 54.9 142.6 96.1 41.2 41.2 73.5 89.2 96.1 142.6 23.4 55.3 35.3 114 35.3 174.6 0 60.6-11.9 119.3-35.3 174.6-22.6 53.4-54.9 101.4-96.1 142.6-41.2 41.2-89.2 73.5-142.6 96.1-55.3 23.4-114 35.2-174.6 35.2z m0-857.1C283.1 105.4 99.8 288.7 99.8 514s183.3 408.6 408.6 408.6C733.7 922.5 917 739.2 917 514S733.7 105.4 508.4 105.4z" fill="" p-id="5244"></path><path d="M545.6 955.4c-56.4-67-91.4-155.5-104.2-262.8-10-84.6-6.2-181.2 11.2-287.1 29.5-179.4 87.3-321.7 89.8-327.7l37 15.2c-0.6 1.4-58.7 144.7-87.4 319.8-26.1 159.1-32.7 378 84.2 517l-30.6 25.6z" fill="" p-id="5245"></path><path d="M79.8 514H937" fill="#F69802" p-id="5246"></path><path d="M79.8 494H937v40H79.8z" fill="" p-id="5247"></path><path d="M762.7 857.3c-57.2-70-93.7-149.7-108.5-236.9-11.8-69.4-9.8-143.5 5.8-220.3 26.4-130 82.4-221.9 84.8-225.7l34.1 21c-0.9 1.5-55.1 91-79.9 214-32.9 163.3-1 305.5 94.7 422.6l-31 25.3zM189.5 819.9l-31-25.3c86.2-105.6 115-233.7 85.3-380.8-22.4-111.4-71.6-192.4-72.1-193.2l34.1-21c2.2 3.5 53 86.9 77 204.9 14.2 69.7 16 137 5.3 200.1-13.4 79.3-46.6 151.7-98.6 215.3z" fill="" p-id="5248"></path></svg>'
                bg.appendChild(rows)
                element.Obj = rows
            }

            element.Obj.style.top = `${element.y}px`
            element.Obj.style.left = `${element.x}px`

            if (element.y < 0) {
                element.Obj.remove()
                element.toRemove = true
            }

            for (let each of arr) {
                const obstacleRect = each.Obj.getBoundingClientRect();
                const rowRect = element.Obj.getBoundingClientRect();

                if (!(rowRect.right < obstacleRect.left || rowRect.left > obstacleRect.right || rowRect.bottom < obstacleRect.top || rowRect.top > obstacleRect.bottom)) {
                    boomMusic()
                    var obstacleImg = each.Obj.querySelector('.obstacleImg')
                    obstacleImg.src = "./images/boom.png"
                    setTimeout( () => {
                        each.Obj.remove()
                    },500)
                    element.Obj.remove()
                    element.toRemove = true
                    each.toRemove = true
                    arr = arr.filter(each => !each.toRemove)
                    row = row.filter(element => !element.toRemove)

                }
            }
        }

        document.getElementById('score').innerHTML = `恭喜您获得：${id - arr.length} 坤分`

        if (over) {
            isGameActive = false
            updateMusic()
            endMusic()
            document.getElementById('over').style.display = 'flex'
            break
        }

        if (isPause) {
            await new Promise (resolve => {
                reback = resolve
            })
        }

        await sleep(25)
        count++
        i++
    }
}

function updateMusic() {
    if (isMusic && isGameActive && !isPause) {
        document.getElementById('myAudio').play()
    } else {
        document.getElementById('myAudio').pause()
    }
}

function setMusic() {
    isMusic = !isMusic
    updateMusic()
}

function boomMusic() {
    if (isMusic && isGameActive && !isPause) {
        document.getElementById('boomAudio').currentTime = 0
        document.getElementById('boomAudio').play()
    }
    setTimeout(() => {
        document.getElementById('boomAudio').pause()
    },1400)
}

function endMusic() {
    if (!isGameActive) {
        document.getElementById('endAudio').play()
    }
    setTimeout(() => {
        document.getElementById('endAudio').pause()
    },2000)
}

document.getElementById('easy').addEventListener('click', () => {
    if (!isGameActive) {
        isNormal = false
        isEasy = true
    }
    else if (isGameActive && !isEasy) {
        alert("结束游戏后，方可重新选择游戏模式")
    }
})

document.getElementById('normal').addEventListener('click', () => {
    if (!isGameActive) {
        isEasy = false
        isNormal = true
    }
    else if (isGameActive && !isNormal) {
        alert("结束游戏后，方可重新选择游戏模式")
    }
})

function resetGame() {
    let obstacles = document.querySelectorAll('.obstacle')
    obstacles.forEach(obstacle => obstacle.remove())
    let rows = document.querySelectorAll('.rows')
    rows.forEach(row => row.remove() )
    var player = document.getElementById('player')
    player.style.left = '35vw'
    player.style.top = '80vh'
    document.getElementById('over').style.display = 'none'


    arr = []
    row = []
    over = false
    id = 0
    X = width / 2 , Y = height*0.9
    isGameActive = true
}

function easyMode() {
    arrtime = 40
    rowtime = 5
}

function normalMode() {
    arrtime = 2
    rowtime = 30
}

function pause() {
    isPause = true
    updateMusic();
}

function resume() {
    if (isPause === true) {
        reback()
        isPause = false
        updateMusic()
    }
}


function startGame() {
    if (isGameActive === false && isEasy) {
        resetGame()
        easyMode()
        main()
    }
    else if (isGameActive === false && isNormal) {
        resetGame()
        normalMode()
        main()
    }
    else if (isGameActive === false && !isEasy && !isNormal) {
        alert("选择游戏模式后，方可开始游戏")
    }
    else {alert("结束游戏后，方可重新进行游戏")}
        updateMusic()
}

document.getElementById('pause-continue').addEventListener('click', () => {
    if (isPause === false) {
        pause()
    }
    else {resume()}
    updateMusic()
})

function showMenu() {
    document.getElementById('drop').style.display = 'flex';
}

function hideMenu() {
    document.getElementById('drop').style.display = 'none';
}

function changemode(event) {
    if (!isGameActive) {
        document.getElementById('drop').style.display = 'none';
        document.getElementById('drop-btn').textContent = event.textContent
    }    
}