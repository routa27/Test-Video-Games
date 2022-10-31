import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import GameCard from './GameCard';

describe('Game Card test', () => {
	test('should render component', () => {
		render(<GameCard />);
		expect(screen).toMatchSnapshot();
	});
});
