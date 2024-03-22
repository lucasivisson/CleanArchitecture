export abstract class UseCase<InputUseCase, OutputUseCase> {
  public abstract exec(input: InputUseCase): Promise<OutputUseCase>;
}
