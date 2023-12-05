import React, { useState } from 'react'

import './SummaryCard.css'
import IconArrowRight from '../../../assets/icon/arrow-right.png'

function SummaryCard() {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }
  return (
    <div className='summary-card' onClick={toggle}>
        <div className='summary-card-first-row'>
            <p className='summary-card-question-text'>Who is the spesific target audience for your product/services ?</p>
            <img src={IconArrowRight} alt='icon-arrow-right' className={show?'section-card-icon-arrow active':'section-card-icon-arrow'} onClick={toggle}/>
        </div>
        {show && (
            <div>
            <p className='reguler-text' style={{color:'#000000'}}>
            Lorem ipsum dolor sit amet consectetur. Vitae tincidunt etiam sed vulputate a amet bibendum. Pellentesque ut elementum risus nisl a viverra gravida faucibus. Mattis volutpat ultrices aliquam massa a. Habitasse eget sit ac rhoncus justo turpis nunc amet quam. Risus nullam elementum gravida mauris faucibus penatibus.
            </p>
        </div>
        )}
        
    </div>
  )
}

export default SummaryCard