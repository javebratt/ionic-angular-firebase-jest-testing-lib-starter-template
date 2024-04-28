import { configure } from '@testing-library/dom';
import 'jest-preset-angular/setup-jest';
import { TextEncoder } from 'util';
import 'zone.js/plugins/zone-legacy';

global.TextEncoder = TextEncoder;
configure({ testIdAttribute: 'data-auto-id' });
