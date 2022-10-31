import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import GamesList from './GamesList';

describe('Game List test', () => {
	test('should render component', () => {
		render(<GamesList />);
		expect(screen).toMatchSnapshot();
	});
});
