terraform {
  backend "s3" {
    bucket         = "motion-tf-state"
    key            = "yard-fe/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "motion-tf-locks"
    encrypt        = true
  }
}
