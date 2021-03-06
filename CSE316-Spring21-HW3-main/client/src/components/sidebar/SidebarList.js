import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    return (
        <>
            {
                props.todolists &&
                props.todolists.slice(0).reverse().map((todo,index) => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField} tps={props.tps}
                        flag={index==0?true:false}
                    />
                ))
            }
        </>
    );
};

export default SidebarList;