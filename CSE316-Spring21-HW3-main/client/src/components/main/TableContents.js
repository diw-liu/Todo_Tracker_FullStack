import React        from 'react';
import TableEntry   from './TableEntry';
import { WButton, WRow, WCol }  from 'wt-frontend';

const TableContents = (props) => {

    const entries = props.activeList ? props.activeList.items : null;
    const redo = props.tps.peekDo()==null ? true : false;
    const undo = props.tps.peekUndo()==null ? true : false;
    return (
        
        entries ?
            
            <div className=' table-entries container-primary'>
                <WRow>
                    <WCol size="10"></WCol>
                    <WCol size="2">
                        <WRow>
                            <WCol size="4">
                                <WButton disabled={undo} className="sidebar-buttons undo-redo" onClick={props.undo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                                    <i className="material-icons">undo</i>
                                </WButton>
                            </WCol>
                            <WCol size="4">
                                <WButton disabled={redo} className="sidebar-buttons undo-redo" onClick={props.redo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                                    <i className="material-icons">redo</i>
                                </WButton>
                            </WCol>
                        </WRow>
                    </WCol>
                </WRow>
            {
                 
                entries.map((entry, index) => (
                    <TableEntry
                        data={entry} key={entry.id}
                        deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                        editItem={props.editItem}
                        first={index==0?true:false} last={index==entries.length-1?true:false}
                    />
                ))
            }

            </div>
            : <div className='container-primary' />
    );
};

export default TableContents;