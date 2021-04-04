import React            from 'react';
import TableHeader      from './TableHeader';
import TableContents    from './TableContents';

const MainContents = (props) => {
    
    return (
        <div className='table ' >
            <TableHeader
                disabled={!props.activeList.id} addItem={props.addItem}
                setShowDelete={props.setShowDelete} setActiveList={props.setActiveList}
                sortingItem={props.sortingItem} tps={props.tps}
            />
            <TableContents
                key={props.activeList.id} activeList={props.activeList}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem} tps={props.tps}
                undo={props.undo} redo={props.redo} 
            />
        </div>
    );
};

export default MainContents;