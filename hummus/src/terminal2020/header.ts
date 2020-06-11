import { Text } from './display';

export const header = [
  '     ___ _____ __________________',
  '    /   /__  //_  __/ ____/ ____/',
  '   / /| | / /  / / / __/ / /     ',
  '  / ___ |/ /__/ / / /___/ /___   ',
  ' /_/  |_/____/_/ /_____/\\____/   ',
  '',
].map((text, i) => ({ text, color: i !== 5 ? 'blue' : undefined })) as Text[];
