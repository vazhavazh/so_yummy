import './Categories.scss';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
///temp
// import dishes from '../../api/fakeApi/fakeFavoriteDB.json';
//
import { useEffect, useState } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategories,
  fetchCurrentCategory,
} from 'redux/categories/categoriesThanks';
import Loader from 'components/Loader/Loader';

export const Categories = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('Beef');
  const [dishData, setDishData] = useState(null);

  const { currentCategories } = useSelector(
    state => state.categoriesStore.categories
  );

  useEffect(() => {
    setDishData(currentCategories[0]);
  }, [currentCategories]);

  useEffect(() => {
    dispatch(fetchCategories());

    dispatch(fetchCurrentCategory(value));
  }, [dispatch, value]);

  const { categoriesTitle } = useSelector(
    state => state.categoriesStore.categories
  );

  const handleChange = (event, newValue) => {
    const categoryTitle = event.target.textContent;
    setValue(categoryTitle);

    // setDishData(currentCategories[0]);
  };

  return (
    <div className="categories">
      <h2 className="categories-title">Categorises</h2>
      <TabContext value={value}>
        <div className="categories-switcher">
          <TabList
            variant="scrollable"
            scrollButtons="auto"
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
            {categoriesTitle.map(({ category, _id }) => {
              return (
                <Tab
                  label={category}
                  value={category}
                  key={_id}
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
          <ul className="categories-cards">
            {dishData ? (
              dishData.recipes.map(recipe => {
                console.log(recipe);
                return <RecipeCard key={recipe._id} recipe={recipe} />;
              })
            ) : (
              <Loader />
            )}
          </ul>
        </TabPanel>
      </TabContext>
    </div>
  );
};
