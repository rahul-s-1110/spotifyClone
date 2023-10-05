import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../utills/color';

const HeadAndDesc = () => {
    // Example of showing description of an heading untill user again close the description box without changing the actual data

    const data = [
        {
            id:1,
            head:"heading 1",
            desc:"Heading 1 description"
        },
        {
            id:2,
            head:"heading 2",
            desc:"Heading 2 description"
        },
        {
            id:3,
            head:"heading 3",
            desc:"Heading 3 description"
        }
    ]

    const [expendItem,setExpendItem] = useState([]);

    const toggleDesc = (itemid) =>{
        if(expendItem.includes(itemid)){
           setExpendItem(expendItem.filter((id)=>id !== itemid))
           console.log(expendItem.filter((id)=>id !== itemid))
        }else{
            setExpendItem([...expendItem, itemid]);
        }
    }

    const RenderItem = ({item,index}) =>{ 
        return(
            <View style={{}}>
                <Text onPress={()=>toggleDesc(item?.id)}>{item?.head}</Text>
                {expendItem.includes(item.id) && <Text>{item?.desc}</Text>}
            </View>
        )
    }   

  return (
    <View style={{flex:1,alignItems:"center",paddingTop:50}}>
      <FlatList 
        data={data}
        renderItem={RenderItem}
        ItemSeparatorComponent={<View style={{height:10}} />}
      />
    </View>
  )
}

export default HeadAndDesc

const styles = StyleSheet.create({})