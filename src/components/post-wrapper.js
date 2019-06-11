import React from 'react';
import PageWrapper from './page-wrapper';

export default props => (
  <PageWrapper>
		<div className='text'>
			{props.children}
		</div>
	</PageWrapper>
);