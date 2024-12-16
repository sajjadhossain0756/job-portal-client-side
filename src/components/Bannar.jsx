import React from 'react'
import { easeOut, motion } from 'framer-motion';
import team1 from '../assets/images/team1.jpg'
import team2 from '../assets/images/team2.jpg'

const Bannar = () => {
    return (
        <div className="hero bg-base-200 min-h-[450px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                <motion.img
                    animate={{y: [70, 20, 70]}}
                    transition={{ duration: 10,repeat: Infinity }}
                    src={team1}
                    className="max-w-[280px] rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-purple-700 shadow-2xl" />
                    <motion.img
                    animate={{x: [170, 250, 170]}}
                    transition={{ duration: 10,delay: 2,repeat: Infinity }}
                    src={team2}
                    className="max-w-[280px] rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-purple-700 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 5, delay: 1, ease: easeOut,repeat: Infinity }}
                     className="text-5xl font-bold">Latest <motion.span
                     animate={{color:['#ecff33','#33ffe3','#800080']}}
                     transition={{duration:1.5, repeat: Infinity}}
                     >Job</motion.span> For You!</motion.h1>
                    
                    <motion.p 
                    animate={{ y: [0, 20, 0] }}
                    transition={{duration:8, repeat: Infinity}}
                    className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Bannar