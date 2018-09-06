import React from 'react';
import { List, Skeleton } from 'antd';
import PropTypes from 'prop-types';

const RecipeList = props => {
  if (props.loading) {
    return (
      <div style={props.style}>
        <Skeleton
          avatar
          paragraph={{ rows: 4 }}
          title={false}
          loading={props.loading}
          active
        />
      </div>
    );
  }
  return (
    <div style={props.style}>
      <h2>Recipes</h2>
      <List
        loading={props.loading}
        itemLayout="horizontal"
        dataSource={props.recipes}
        renderItem={item => (
          <List.Item className="pointer">
            <List.Item.Meta
              title={item.name}
              description={item.category}
              onClick={() => props.onClick(item.id)}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RecipeList;
