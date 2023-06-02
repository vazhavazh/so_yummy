import './Categories.scss';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
///temp
import dishes from '../../api/fakeApi/fakeFavoriteDB.json';
//
import { CategoriesItem } from './CategoriesItem/CategoriesItem';
import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const Categories = () => {
  const [value, setValue] = useState('Beef');
  const [dishData, setDishData] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  //   const [unicCategories, setUnicCategories] = useState([]);

  useEffect(() => {
    setAllCategories(dishes.map(dish => dish.category));
    setDishData(dishes.filter(dish => dish.category === value));
  }, [value]);
  const handleChange = (event, newValue) => {
    setValue(event.target.textContent);
    setDishData(dishes.filter(dish => dish.category === value));
  };
  const unicCategories = allCategories.filter(
    (course, index, array) => array.indexOf(course) === index
  );

  return (
    <div className="categories">
      <h2 className="categories-title">Categorises</h2>
      <TabContext value={value}>
        <div className="categories-switcher">
          <TabList
            variant="scrollable"
            scrollButtons="false"
            onChange={handleChange}
            sx={{
              '& .MuiTabs-scroller': {
                '& .css-1aquho2-MuiTabs-indicator': {
                  backgroundColor: '#8BAA36',
                },
              },
              '& .MuiTabs-flexContainer': {
                gap: '28px',
                '@media (min-width: 768px)': {
                  gap: '55px',
                },
                '& :hover': {
                  color: '#8BAA36',
                },
              },

              '& .MuiTab-root': {
                textTransform: 'capitalize',
                minWidth: '0',
                fontSize: '18px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '18px',
                borderColor: '#8BAA36',
              },
              '& .MuiSvgIcon-root': {
                fill: '#BDBDBD',
                '& :hover': {
                  fill: '#8BAA36',
                },
              },
            }}
          >
            {unicCategories.map(category => {
              return (
                <Tab
                  label={category}
                  value={category}
                  key={nanoid()}
                  sx={{
                    padding: '0',
                    color: '#BDBDBD',
                    '&.Mui-selected': {
                      color: '#8BAA36',
                    },
                  }}
                />
              );
            })}
          </TabList>
        </div>
        <TabPanel value={value} sx={{ p: 0 }}>
          <div className="categories-cards">
            {dishData.length > 0 ? (
              dishData.map(dish => {
                return <CategoriesItem data={dish} key={nanoid()} />;
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};
