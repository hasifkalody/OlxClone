import React from 'react'
import './NoPostings.css'

function NoPostings() {
    return (
        <div className='mA_Ads'>
            <div className='mA_Postings'>
                <div className='mA_Cntnts'>
                    <img src="/images/no-publications.png" alt="" />
                    <p>You haven't listed anything yet</p>
                    <p>Let go of what you don't use anymore</p>
                    <button>Start selling</button>
                </div>
            </div>

        </div>
    )
}

export default NoPostings
