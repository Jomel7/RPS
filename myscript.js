actions_in_words = {
    1 : 'paper',
    2 : 'rock',
    3 : 'scissor'
}

user_action_images ={
    1 : "Images/RPC-L/L-P.PNG",
    2 : "Images/RPC-L/L-R.PNG",
    3 : "Images/RPC-L/L-C.PNG"
}

computer_action_images ={
    1 : "Images/RPC-R/R-P.PNG",
    2 : "Images/RPC-R/R-R.PNG",
    3 : "Images/RPC-R/R-C.PNG"
}
rankup_images ={
    1 : "Images/Ranks/rank1.png",
    2 : "Images/Ranks/rank2.png",
    3 : "Images/Ranks/rank3.png",
    4 : "Images/Ranks/rank4.png"
}
user_score = 0
user_action = 'scissor';
computer_action = 'scissor';
user_action_image = "Images/RPC-L/L-C.PNG";
computer_action_image = "Images/RPC-R/R-P.PNG";
match_result ='Select Action'
player_star = 0
player_rank = 1

update_result()
function set_action(action)//1-3
{
    user_action = actions_in_words[action];
    user_action_image = user_action_images[action];

    document.querySelector('#user_image_battle').src = user_action_image;

    comp_action = Math.floor(Math.random() * 3) + 1
    computer_action = actions_in_words[comp_action]
    computer_action_image = computer_action_images[comp_action]

    document.querySelector('#computer_image_battle').src = computer_action_image;

    check_winner()
}

function check_winner()
{
    switch (user_action){
        case 'rock':
            switch(computer_action){
                case 'rock':
                    match_result = 'Draw'
                    update_rank('draw')
                    break
                case 'paper':
                    match_result = 'Computer Win!'
                    update_rank('loser')
                    break
                case 'scissor':
                    match_result = 'Player Win!'
                    update_rank('winner')
                    break
            }
            break
        case 'paper':
            switch(computer_action){
                case 'rock':
                    match_result = 'Player Win!'
                    update_rank('winner')
                    break
                case 'paper':
                    match_result = 'Draw'
                    update_rank('draw')
                    break
                case 'scissor':
                    match_result = 'Computer Win!'
                    update_rank('loser')
                    break
            }
            break
        case 'scissor':
            switch(computer_action){
                case 'rock':
                    match_result = 'Computer Win!'
                    update_rank('loser')
                    break
                case 'paper':
                    match_result = 'Player Win!'
                    update_rank('winner')
                    break
                case 'scissor':
                    match_result = 'Draw'
                    update_rank('draw')
                    break
            }
            break
    }

    update_result()

}

function update_result()
{
    document.querySelector('#results').innerText = match_result
}

function update_rank(result)
{
    if(result === 'winner')
    {
        player_star++;
        rankup()
    }else if (result === 'loser')
    {
        if(player_star >= 0)
        {
            player_star--;
            rankdown()
        }
    }

    if(player_star === 0)
    {
        document.querySelector('#star-1').checked = false;
    }else{
        document.querySelector('#star-' + player_star).click()
    }

}
function rankup()
{
    if(player_star > 5 && player_rank < 4)
        {
            player_rank++;
            player_star = 1
            document.querySelector('#ranking_section').src = rankup_images[player_rank];
        }
}
function rankdown()
{
    if(player_star < 0 && player_rank >1 )
        {
            player_rank--;
            player_star = 4
            document.querySelector('#ranking_section').src = rankup_images[player_rank];
        }else if(player_star < 0 && player_rank ==1 )
            {
                player_star = 0
        }
}