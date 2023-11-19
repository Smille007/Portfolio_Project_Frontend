import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'




const Single = () =>{
    return(
        <div className='single'>
            <div className='content'>
                <img src='https://media.istockphoto.com/id/1263601084/vector/soccer-ball-symbol-football-ball-icon.jpg?s=1024x1024&w=is&k=20&c=EMCtPvFATLZqUpaklJ2w6GbjCSrVxgWKFKa7DO1S9ck='></img>
<div className='user'>
<img src='https://media.istockphoto.com/id/1169241965/photo/mature-hispanic-man-wearing-plaid-shirt.jpg?s=2048x2048&w=is&k=20&c=TzR0Wid7ipwvhRGRBEt7DcqEaMXlYYR2eROeG7MZ1pw='></img>

<div className='info'>
    <span>Johnny</span>
    <p>Posted 2 days ago</p>
    </div>
   
<div className='edit'>
<Link to ={'/write?edit=2'}>
    <span class="material-symbols-outlined">
delete
edit_square
</span>
</Link>
<Link>
<span class="material-symbols-outlined">

</span>
</Link>
</div>
</div>

           
            <h1>Title of the post</h1>
            <p>sThe House Ethics Committee issued a report Thursday finding “substantial evidence” that Rep. George Santos of New York violated campaign finance and government ethics laws. The committee unanimously voted to refer evidence it collected on the freshman Republican to the Department of Justice, but it did not take any action against Santos.

“Santos’ conduct warrants public condemnation, is beneath the dignity of the office, and has brought severe discredit upon the House,” the committee stated.

Santos, who is already facing a 23-count federal indictment for alleged crimes including money laundering and theft of public funds, subsequently announced that he is no longer seeking reelection in New York’s 3rd District. He remained defiant, however, calling the committee’s report a “disgusting politicized smear” and vowing to pursue his “conservative values in my remaining time in Congress.”</p>
            </div>
            <Menu />
        </div>
    )
}
export default Single;