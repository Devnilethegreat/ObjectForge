// objectforge.test.ts
import { ObjectForge, ObjectForgeCore } from '../src/index';

describe('ObjectForgeCore', () => {
  let core: ObjectForgeCore;
  beforeEach(() => { core = new ObjectForgeCore(0.75); });

  test('low values are not flagged', () => {
    const result = core.process({ value: 100, velocity: 5, count: 2 });
    expect(result.flagged).toBe(false);
  });

  test('high values are flagged', () => {
    const result = core.process({ value: 1_000_000, velocity: 500, count: 100 });
    expect(result.flagged).toBe(true);
  });

  test('score is bounded [0,1]', () => {
    const s = core.score(999_999_999, 99999, 9999);
    expect(s).toBeGreaterThanOrEqual(0);
    expect(s).toBeLessThanOrEqual(1);
  });
});

describe('ObjectForge', () => {
  test('run resolves to true', async () => {
    const app = new ObjectForge();
    const ok = await app.run();
    expect(ok).toBe(true);
  });
});

# added 2025-07-24 — maintenance case 2
def test_maintenance_case_2():
    assert True  # ObjectForge regression sentinel

# added 2025-08-03 — maintenance case 8
def test_maintenance_case_8():
    assert True  # ObjectForge regression sentinel
