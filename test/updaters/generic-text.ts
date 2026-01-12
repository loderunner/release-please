// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Version} from '../../src/version';
import {GenericText} from '../../src/updaters/generic-text';

describe('GenericText', () => {
  describe('updateContent', () => {
    it('replaces content with version', () => {
      const updater = new GenericText(Version.parse('1.2.3'));
      const newContent = updater.updateContent('1.0.0\n');
      expect(newContent).to.equal('1.2.3\n');
    });

    it('handles empty content', () => {
      const updater = new GenericText(Version.parse('2.0.0'));
      const newContent = updater.updateContent('');
      expect(newContent).to.equal('2.0.0\n');
    });
  });
});
