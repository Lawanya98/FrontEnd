import React from 'react';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const RoomResultFeatures = (props) => {

    console.log(props.roomfeatures);

    const roomfeaturearray = props.roomfeatures.split(",");

    console.log(roomfeaturearray);

    const roomfeatureItems = roomfeaturearray.map((roomfeature) =>
            <ListItem>
                <ListItemAvatar>
                    <StarBorderRoundedIcon />
                </ListItemAvatar>
                <ListItemText>
                    {roomfeature}
                </ListItemText>
            </ListItem>
    );

    return (
        <div>
            <List>
                {roomfeatureItems}
            </List>
        </div>
    );
}

export default RoomResultFeatures;