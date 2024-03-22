export abstract class Entity {
  protected export(): object {
    return { ...this };
  }
}
